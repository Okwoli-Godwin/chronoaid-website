import farmer from "../../assets/farmer.png"; 

export interface Testimonial {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  patientName: string;
  patientProfile: string;
  image: string;
}

export const testimonials: Testimonial[] =[
    {
        title: "Optimizing Diabetes Care in Rural Nigeria",
        challenge:
          "Limited access to healthcare facilities and difficulty in monitoring blood sugar levels.",
        solution:
          "ChronoAid AI's remote monitoring and AI-powered alerts provide real-time updates to the local clinic, allowing healthcare workers to intervene promptly.",
        outcome:
          "Improved glycemic control and reduced hospital visits, resulting in enhanced quality of life and reduced healthcare costs.",
        patientName: "Ahmed",
        patientProfile:
          "A 45-year-old farmer in rural Northern Nigeria with diabetes.",
        image: farmer,
      },
      {
        title: "Enhancing Hypertension Management for Working-Class Patients",
        challenge:
          "Irregular follow-up appointments due to work commitments and traffic congestion in Lagos.",
        solution:
          "ChronoAid AI's digital health platform enables at-home blood pressure monitoring and data sharing with clinicians, facilitating timely interventions and medication adjustments.",
        outcome:
          "Consistent blood pressure management and reduced risk of complications, while minimizing disruptions to the patient's work schedule.",
        patientName: "Jane",
        patientProfile:
          "A 32-year-old civil servant living in Lagos with hypertension.",
        image: farmer,
      },
      {
        title: "Post-Stroke Rehabilitation in a Low-Resource Setting",
        challenge:
          "Inadequate access to rehabilitation centers and difficulty in monitoring the patient's recovery progress.",
        solution:
          "ChronoAid AI's IoMT devices track the patient's mobility and recovery metrics, while AI-driven analytics help guide virtual rehabilitation sessions with clinicians.",
        outcome:
          "Enhanced rehabilitation outcomes with consistent follow-up care, improving the patient’s functional independence.",
        patientName: "John",
        patientProfile:
          "A 60-year-old stroke survivor living in a semi-urban area of Enugu.",
        image: farmer, 
      },
      {
        title: "Chronic Kidney Disease (CKD) Management in Urban Nigeria",
        challenge:
          "High costs of regular clinic visits and lack of awareness about CKD self-management.",
        solution:
          "ChronoAid AI provides continuous monitoring of key health indicators and sends educational content to the patient, promoting adherence to lifestyle changes and treatment.",
        outcome:
          "Early detection of potential complications and reduced need for emergency interventions, lowering overall healthcare expenses.",
        patientName: "Michael",
        patientProfile:
          "A 50-year-old business owner in Abuja with CKD.",
        image: farmer, 
      },
      {
        title: "Childhood Asthma Management in Low-Income Families",
        challenge:
          "Limited access to specialized pediatric care and frequent asthma attacks.",
        solution:
          "ChronoAid AI’s integration with IoMT devices allows remote monitoring of the child's respiratory function, providing alerts for early intervention.",
        outcome:
          "Decrease in the frequency of asthma exacerbations and a reduction in school absences, improving the child's overall health and quality of life.",
        patientName: "Sam",
        patientProfile:
          "An 8-year-old child in a low-income neighborhood in Ibadan with asthma.",
        image: farmer, 
      },
      {
        title: "Supporting Pregnancy-Induced Hypertension in Public Healthcare",
        challenge:
          "Limited prenatal care due to overcrowded clinics and healthcare worker shortages.",
        solution:
          "ChronoAid AI supports remote blood pressure monitoring and automated risk assessments, allowing healthcare workers to focus on high-risk cases and provide timely interventions.",
        outcome:
          "Reduced risk of pregnancy complications, resulting in healthier outcomes for both mother and child.",
        patientName: "Aisha",
        patientProfile:
          "A 28-year-old pregnant woman attending a public healthcare center in Kaduna.",
        image: farmer,
      },
  ];
