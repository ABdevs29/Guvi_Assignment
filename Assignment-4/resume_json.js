let resumeObj = {  
    "CAREER OBJECTIVE": "A student of GUVI ZEN classes and an aspiring Full stack (MERN) Developer with keen interest in creating high-quality, scalable, predictable, and high-performance web applications seeking an entry level role. In my last stint, I have worked in the Construction industry under Project Planning and Vendor management domain.", 
    "SKILLS LEARNING": ["HTML", "CSS", "JavaScript", "Bootstrap", "NodeJS", "ReactJS", "AWS  Cloud", "MongoDB"], 
    "ACADEMIC PROFILE": { 
        "POST GRADUATION": { "Institute": "NICMAR, Pune", "Board": "NICMAR, Pune", "Degree": "PGP PEM", "Year": 2016, "Marks": "6 CPI" }, 
        "UNDER GRADUATION": { "Institute": "SDMCET, Dharwad", "Board": "VTU, Belgaum", "Degree": "B.E. Civil", "Year": 2014, "Marks": "7.23 CGPA" }, 
        "12th Std": { "Institute": "AECS, Kaiga", "Board": "CBSE", "Degree": "12th", "Year": 2010, "Marks": "79.40%" }, 
        "10th std": { "Institute": "AECS, Kaiga", "Board": "CBSE", "Degree": "10th", "Year": 2008, "Marks": "87.20%" } }, 
        "ACHIEVEMENTS": ["Secured 94.96 percentile in Xavier's Aptitude test, 2014.", "All India Hindi Science Quiz Zonal winner and 3rd place National conducted by Atomic Energy Education Society.", "AIR 12th in National Interactive Biotechnology Olympiad.", "Medal winner in National Cyber and Maths Olympiads."], 
        "INTERESTS": ["Technology Geek", "Film Aficionado", "Horology"], 
        "PERSONAL DETAILS": { 
            "Contact Address": "RHB Colony, Mahadevpura, Bangalore, Karnataka - 560048", 
            "Home Address": "Nandangadda, Baad, Karwar, Karnataka - 581304", 
            "DOB": "29th August, 1993", 
            "Marital Status": "Married", 
            "Phone Number": 9482896904, 
            "LinkedIn": "https://www.linkedin.com/in/abhishek-gaonkar-a05b2820b/", 
            "Twitter": "https://twitter.com/ASGaonkar29", 
            "GitHub": "https://github.com/ABdevs29", 
            "Email id": "abhishek.elmoro@gmail.com" } }
  
console.log(resumeObj); //whole data

console.log(resumeObj["ACADEMIC PROFILE"]["10th std"].Marks); //specific data

//Iterating over specific data in JSON
for (let i in resumeObj) {
  if (i == "SKILLS LEARNING") {
    for (let j in resumeObj[i]) {
      console.log(resumeObj[i][j]);
    }
  }
}
