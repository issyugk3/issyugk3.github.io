import { ref } from "vue";
export const educationTimeline = ref([
    { date: "2025-10",  detail: "Expected: Enroll in The UTokyo as an master's student under Professor Ryuichiro Nakato's supervision", type: "education" },
    { date: "2025-6",  detail: "Expected: Gradute from ZJUT", type: "education" },

    { date: "2024-9",   detail: "Recieved second prize of scholarship for study", type: "awards" },
    { date: "2024-8",   detail: "Recieved national second prize of China College Students' Outsourcing Innovation and Entrepreneurship Contest", type: "competition" },
    { date: "2023-9",   detail: "Recieved third prize of scholarship for study", type: "awards" },
    { date: "2022-9",   detail: "Recieved scholarship for social work & third prize of Scholarship for study", type: "awards" },
    { date: "2021-9",  detail: "Enroll in the ZJUT as an undergraduate", type: "education" },
  ]);
  
  export const jobTimeline = ref([
    { date: "From 2023-5 to 2023-8", title: "Network Security Internship", detail: "Participated as network security engineer intern in 2022 Asian Olympic Games, Hangzhou.", type: "internship" },
  ]);
  
  export const typeColors = {
    // education
    education: '#38a2ff',      
    awards: '#f5a623',         
    academic: '#6a1b9a',       
    competition: '#f5ff66',    
  
    // job & internship
    job: '#ff6f61',           
    internship: '#ffcc00',     
  };
  