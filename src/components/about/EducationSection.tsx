import { Award, MapPin, Star, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology | Computer Engineering",
    subtitle: "B. Tech Honours | AIML",
    institution: "Sanjivani College of Engineering",
    location: "Kopargaon",
    period: "2021 – 2025",
    grade: "GPA: 8.4"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mahaveer Jain High School",
    location: "Lasalgaon",
    period: "2020 – 2021",
    grade: "Percentage: 93.83%"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Loknete Dattaji Patil Vidyalaya",
    location: "Lasalgaon",
    period: "2018 – 2019",
    grade: "Percentage: 89.20%"
  }
];

export const EducationSection = () => (
  <section className="mb-16">
    <div
      className="bg-[--surface0] p-8 rounded-2xl border border-[--surface1] shadow-sm"
    >
      <div className="space-y-10 ">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`${
              index !== educationData.length - 1 ? "border-b font-inter border-[--surface1] pb-8" : ""
            }`}
          >
            <div className="space-y-2">
              <h3 className="text-lg  font-semibold text-[--text-color]">{edu.degree}</h3>
              {edu.subtitle && (
                <p className="text-sm font-aldrich text-[--blue] font-medium">{edu.subtitle}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-6 font-aldrich mt-4 text-sm text-[--subtext1]">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[--institution]" />
                <span className="font-medium">{edu.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[--location]" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[--maroon]" />
                <span>{edu.grade}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[--period]" />
                <span>{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  </section>
);
