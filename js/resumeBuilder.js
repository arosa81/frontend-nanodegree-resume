// var name = "Alex Rosa";
// var role = "Web Front End Ninja";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
//
// $("#header").prepend(formattedName + "<br>" + formattedRole);

var skills = ["awesomeness", "HTML", "CSS", "Javascript"];

var bio = {
  "name": "Alex Rosa",
  "role": "Web Front End Ninja",
  "contacts": {
    "mobile": "403.606.0637",
    "email": "alex.j.rosa@gmail.com",
    "twitter": "<a href=\"https://twitter.com/AlexJRosa\" target=\"_blank\">AlexJRosa<\/a>",
    "github": "<a href=\"https://github.com/arosa81\"  target=\"_blank\">arosa81<\/a>",
    "location": "Calgary"
  },
  "picURL": "<img src=\"./images/fry.jpg' alt='bio picture\" alt=\"Bio Pic\">",
  "welcomeMessage": "This is my bio - enjoy! <br>",
  "skills": skills
};

bio.displayBio = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedName + " " + formattedRole);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGitHub + formattedLocation);
}

bio.displayBio();

if (skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < skills.length; i++) {
    $("#header").append(HTMLskills.replace("%data%", skills[i]));
  }
}

var work = {
  "jobs": [
    {
      "employer": "AJR Ideas Consulting ltd.",
      "title": "CEO, Senior Business Analyst",
      "location": "Calgary, AB, Canada",
      "dates": "2012-present",
      "description": "Technical business analyst"
    },
    {
      "employer": "Ideaca",
      "title": "SharePoint Business Analyst",
      "location": "Calgary, AB, Canada",
      "dates": "2010-2012",
      "description": "SharePoint business analyst"
    }
  ]
};

work.displayWork = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + "<br>" + formattedWorkTitle + "<br>" +
      formattedWorkDates + "<br>" + formattedWorkLocation + "<br>" + formattedWorkDesc + "<br>");
  }
};

work.displayWork();

var projects = {
  "project": [
    {
      "title": "HSE KPI Reporting Team Site",
      "dates": "2013-2014",
      "description": "As a BA/PM & developer, I created an HSE KPI reporting site (on SharePoint 2013) for all HSE groups across the organization to collaborate on and meet Vermilion’s key HSE goal. Key benefits include: <br> •	Aligned to support Vermilion’s key overall HSE goal <br> •	Supports HSE KPI reporting process from HSE Advisor input all the way to corporate <br> •	Easy publishing of KPI rollup information to web pages via Microsoft Excel Services",
      "image": ""
    },
    {
      "title": "Online Well Status Form",
      "dates": "2013-2014",
      "description": "As the technical lead, I created and online well status form (on SharePoint 2013) for the Canadian business unit (includes foremans and field admins), measurements, production and joint venture accounting. This solution provides the following key benefits: <br> •	Streamlines the entire process in documenting the change in well status between all parties <br> •	Centrally managed and accessed by all parties <br> •	Supports auditability by storing versions of each hand-off",
      "image": ""
    },
    {
      "title": "Online Travel Request Management Solution",
      "dates": "2013-2014",
      "description": "As a BA/PM & developer, I created and online travel request management solution (on SharePoint 2013) for the travel team, executive assistants group, and Vermilion employee travellers. This solution provides the following key benefits: <br> •	Streamlines travel requests and approvals (on Vermilion's intranet) <br> •	Assists to reconcile accounting and budget issues via auto generation of accounting codes <br> •	Centrally accessible from the intranets \"My Travel Requests\" dashboard",
      "image": ""
    }
  ]
};

projects.display = function () {
  for (var proj in projects.project) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[proj].image);
    $(".project-entry:last").append(formattedProjectTitle + "<br>" + formattedProjectDates + "<br>" +
      formattedProjectDesc + "<br>" + formattedProjectImage);
  }
};

projects.display();

var education = {
  "schools": [
    {
      "name": "Udacity",
      "city": "Calgary",
      "major": "Front End Web Developer",
      "gradYear": 2015,
      "courseInfo": "Online course to front end web development"
    },
    {
      "name": "SAIT",
      "city": "Calgary",
      "major": "Information Systems Design",
      "gradYear": 2010,
      "courseInfo": "Information systems architectural analysis"
    }
  ]
};

// $("#main").append(education.name);
// $("#main").append(education.yearsSchoolAttended);
// $("#main").append(education.schoolCity);

function inName(name) {
  name = name.trim().split(" ");
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  var fullName = name.join(" ");
  return fullName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
