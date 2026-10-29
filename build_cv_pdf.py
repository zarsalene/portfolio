from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parent
OUT = ROOT / "assets" / "Arsalene_Zbidi_CV.pdf"
INK = colors.HexColor("#1d2922")
GREEN = colors.HexColor("#51712e")
GREY = colors.HexColor("#68736b")


class CVDoc(BaseDocTemplate):
    def __init__(self, path):
        super().__init__(str(path), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm,
                         topMargin=15 * mm, bottomMargin=14 * mm, title="Arsalene Zbidi - CV",
                         author="Arsalene Zbidi")
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height,
                      id="main", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
        self.addPageTemplates([PageTemplate(id="cv", frames=frame, onPage=self.draw_footer)])

    @staticmethod
    def draw_footer(canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(colors.HexColor("#d9ded9"))
        canvas.line(16 * mm, 10 * mm, A4[0] - 16 * mm, 10 * mm)
        canvas.setFont("Helvetica", 7.5)
        canvas.setFillColor(GREY)
        canvas.drawString(16 * mm, 6 * mm, "Arsalene Zbidi  |  AI Engineer")
        canvas.drawRightString(A4[0] - 16 * mm, 6 * mm, f"{doc.page}")
        canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", fontName="Helvetica-Bold", fontSize=23, leading=26, textColor=INK, spaceAfter=1))
styles.add(ParagraphStyle(name="Headline", fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=GREEN, alignment=TA_LEFT))
styles.add(ParagraphStyle(name="Contact", fontName="Helvetica", fontSize=8.5, leading=11, textColor=GREY, spaceAfter=6))
styles.add(ParagraphStyle(name="SectionCV", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=INK, spaceBefore=7, spaceAfter=4, borderColor=GREEN, borderWidth=0, borderPadding=0))
styles.add(ParagraphStyle(name="BodyCV", fontName="Helvetica", fontSize=8.6, leading=11.4, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="RoleCV", fontName="Helvetica-Bold", fontSize=9.1, leading=11, textColor=INK, spaceBefore=3))
styles.add(ParagraphStyle(name="MetaCV", fontName="Helvetica", fontSize=8, leading=10, textColor=GREEN, spaceAfter=2))
styles.add(ParagraphStyle(name="BulletCV", fontName="Helvetica", fontSize=8.25, leading=10.7, leftIndent=11, firstLineIndent=-7, bulletIndent=0, textColor=INK, spaceAfter=1.7))
styles.add(ParagraphStyle(name="ProjectCV", fontName="Helvetica-Bold", fontSize=8.8, leading=10.5, textColor=INK, spaceBefore=3))


def P(text, style="BodyCV"):
    return Paragraph(text, styles[style])


def role(title, dates, company, place, bullets):
    parts = [P(f"{title} <font color='#68736b'>| {dates}</font>", "RoleCV"), P(f"{company} <font color='#68736b'>| {place}</font>", "MetaCV")]
    parts.extend(P(f"- {b}", "BulletCV") for b in bullets)
    return KeepTogether(parts)


story = [
    P("Arsalene Zbidi", "Name"),
    P("AI ENGINEER  ·  PhD RESEARCHER", "Headline"),
    P("Tunis, Tunisia  |  +216 90 431 500  |  <link href='mailto:zarsalene@gmail.com' color='#68736b'>zarsalene@gmail.com</link>  |  <link href='https://github.com/zarsalene' color='#68736b'>GitHub</link>  |  <link href='https://tn.linkedin.com/in/arsalenezbidi' color='#68736b'>LinkedIn</link>", "Contact"),
    P("PROFILE", "SectionCV"),
    P("AI Engineer and PhD researcher building agentic systems, applied machine learning, and production-oriented backend software. Experience spans ERP-integrated assistants, document-grounded retrieval, computer vision, and AI solution architecture. Research focus: agentic AI for cybersecurity threat hunting."),
    P("EXPERIENCE", "SectionCV"),
    role("Head of AI", "Mar 2026 - Present", "Microzed Solution", "Megrine, Tunisia", [
        "Lead a team of two AI engineers building agents integrated with the Zsolution ERP platform.",
        "Guide development of an ERP assistant for cross-module analytics, conversational queries, and system workflows."]),
    role("AI Engineer & Solution Architect", "Oct 2024 - Mar 2026", "Artificial Insight", "Tunis, Tunisia", [
        "Led technical strategy for a five-person engineering team working on the PowerSale AI platform.",
        "Developed Telco GPT conversational AI with LangGraph multi-agent orchestration.",
        "Built a multi-tenant retrieval system for Kuwait Fire Force training material, combining Qdrant semantic retrieval, Elasticsearch keyword search, Arabic OCR, and graph memory.",
        "Developed a multilingual meeting pipeline for speech transcription, summaries, and text-to-speech reports."]),
    role("Machine Learning Engineer Intern", "Feb 2024 - Sep 2024", "Artificial Insight", "Tunis, Tunisia", [
        "Built vehicle recognition and license-plate OCR workflows with YOLOv8, OpenCV, EasyOCR, and TensorFlow.",
        "Integrated SORT tracking with MongoDB alerting for vehicle identification."]),
    role("DevOps Engineer Intern", "Jan 2021 - Jun 2021", "Polina Group Holding", "Tunis, Tunisia", [
        "Worked on CI/CD and monitoring using GitLab CI, Jenkins, ArgoCD, Kubernetes, Grafana, Prometheus, and SonarQube."]),
    PageBreak(),
    P("Arsalene Zbidi", "Name"),
    P("SELECTED PROJECTS", "SectionCV"),
    P("MICRO - ERP analytics assistant  <font color='#51712e'>| LangGraph, MCP, FastAPI, MySQL</font>", "ProjectCV"),
    P("Agent architecture connects a LangGraph assistant to ERP operations through a separate FastMCP server; employee and AI permissions are checked before tool execution.", "BulletCV"),
    P("FootTraffic AI  <font color='#51712e'>| Python, ONNX Runtime, OpenCV, FastAPI</font>", "ProjectCV"),
    P("Built a doorway counting pipeline using YOLO ONNX detection, ByteTrack, and a hysteresis band, with a multi-camera API and event reporting. A documented 13-crossing calibration sample reached 13/13 at the selected band width.", "BulletCV"),
    P("Research Pal  <font color='#51712e'>| Python, PDF retrieval, LLMs</font>", "ProjectCV"),
    P("Developed PDF-grounded reading, search, and chat workflows that verify generated quotations against extracted document text and flag unsupported claims.", "BulletCV"),
    P("ERP order dispatching and sourcing  <font color='#51712e'>| FastAPI, Gemini, MySQL</font>", "ProjectCV"),
    P("Built ERP APIs for stock-aware order dispatching, warehouse sourcing, and product descriptions; stock calculations are prepared server-side before AI recommendations.", "BulletCV"),
    P("EDUCATION", "SectionCV"),
    P("PhD in Computer Science - Cybersecurity & AI <font color='#68736b'>| 2024 - Present</font>", "RoleCV"),
    P("Higher School of Communications of Tunis (SUP'COM)  |  Research: threat hunting using agentic AI", "MetaCV"),
    P("Engineering Degree in Computer Science - Data Science & AI <font color='#68736b'>| 2021 - 2024</font>", "RoleCV"),
    P("Central Polytechnic School of Tunis", "MetaCV"),
    P("Bachelor in Computer Science <font color='#68736b'>| 2018 - 2021</font>", "RoleCV"),
    P("Higher Institute of Information and Communication Technologies", "MetaCV"),
    P("TECHNICAL SKILLS", "SectionCV"),
    P("<b>AI / ML:</b> LangGraph, LangChain, RAG, multi-agent systems, MCP, NLP, YOLOv8, TensorFlow, PyTorch, OpenCV<br/><b>Backend / data:</b> Python, Java, FastAPI, PostgreSQL, MySQL, MongoDB, Elasticsearch, Redis, Qdrant, FalkorDB<br/><b>Infrastructure:</b> Docker, Kubernetes, GitLab CI, Jenkins, ArgoCD, Prometheus, Grafana, SonarQube<br/><b>Languages:</b> Arabic (native), English (fluent), French (fluent)"),
    P("LEADERSHIP", "SectionCV"),
    P("Captain, Tunisia National Volleyball Team (2014-2018); captain, Hammam-lif Senior Volleyball Team (2016-present)."),
]

OUT.parent.mkdir(parents=True, exist_ok=True)
CVDoc(OUT).build(story)
print(OUT)
