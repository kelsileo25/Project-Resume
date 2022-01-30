let firstName = "Markel";
let middleName = "Oche'";
let lastName = "DeLoach";
let fullName = firstName + " " + middleName + " " + lastName;
let fullNameCaps = fullName.toUpperCase(); // Should modify string to ALL CAPS.

// Calls displayDescription() Function
displayDescription(fullNameCaps, "(Aspiring) Full Stack Developer / Business owner", "I love lions");

// Function that accepts x3 arguments (Name, Career, Description), formats accordingly and prints them to the Console. 
function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}

// My Interests:
console.log("My Interests: ");
// Calls displayInterests() Function
displayInterests("Music"); // 1) Should print - Music
displayInterests("Space & Science"); // 2) Should print - Space & Science
displayInterests("Gaming and parenting"); // 3) Should print - Gaming and parenting
displayInterests("sports"); // 4) Should print - sports
displayInterests("Spending time outdoors in nature."); // 5) Should print - Spending time outdoors in nature. 

// Function that accepts x1 argument (Interest), formats accordingly and prints to the Console.
function displayInterests(myInterest) {
    console.log("*  " + myInterest);
}

// My Previous Experiences:
console.log("My Previous Experiences: ");
// Calls the displayPosition() Function
// SMP
displayPosition("Smp", "Injection Molding", "Handle Mercedes car parts that sometimes calls for robot assistance.")
    // Insomnia Cookies
displayPosition("Insomnia Cookies", "Baker", "Bake and deliver some of the best cookies in town!");
// ZF Industry
displayPosition("ZF industry", "Production worker", "Dealt with Mercedes axles that included lots of heavy lifting and hand tool knowledge.");

// Function that accepts x3 arguments (Company Name, Job Title and Job Description), formats accordingly and prints them to the Console. 
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ");
};

// My Skills:
console.log("My Skills: ");
// Calls dispaySkill() Function
displaySkill("Playing Football", true); // 1) Should print - BAM: Playing Football
displaySkill("HTML5", false); // 2) Should print - HTML5
displaySkill("CSS3", false); // 3) Should print - CSS3
displaySkill("Read people", true); // 4) Should print - BAM: Read people
displaySkill("JavaScript", true); // 5) Should print - BAM: JavaScript
displaySkill("Meditate", true); // 6) Should print - BAM: Meditate
displaySkill("Parenting", true); // 7) Should print - BAM: Parenting
displaySkill("Markdown", false); // 8) Should print - Markdown
displaySkill("Git / GitHub", false); // 9) Should print - Git / GitHub
displaySkill("Left handed thrower", true); // 10) Should print - BAM: Left handed thrower

// Function that accepts x2 arguments (Skill Name / Boolean Value), formats accordingly and prints them to the Console. 
function displaySkill(mySkill, bamBam) {
    if (bamBam == true) { // If (bamBam) true ...BAM: and 'mySkill'.
        console.log("*  BAM: " + mySkill);
    } else if (bamBam == false) {
        console.log("*  " + mySkill); // Else If (bamBam) false ...just 'mySkill'.
    };
}