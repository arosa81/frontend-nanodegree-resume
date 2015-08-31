var skills = ["HTML", "CSS", "Javascript", "jQuery", "Business Analysis"];

var bio = {
  "name": "Alex Rosa",
  "role": "Web Front End Ninja",
  "contacts": {
    "mobile": "403.606.0637",
    "email": "alex.j.rosa@gmail.com",
    "github": "arosa81",
    "twitter": "AlexJRosa",
    "location": "Calgary, AB, Canada"
  },
  "welcomeMessage": "This is my bio - enjoy!",
  "skills": skills,
  "biopic": "./images/Alex-Thumb.jpg\" alt=\"Bio Pic",
  display: function() {}
};

bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedName + formattedRole);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGitHub = HTMLgithub.replace("%data%", '<a href="https://github.com/arosa81" target="_blank">' + bio.contacts.github + '</a>');
  var formattedTwitter = HTMLtwitter.replace("%data%", '<a href="https://github.com/arosa81" target="_blank">' + bio.contacts.twitter + '</a>');
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

  $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
  $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
  $("#header").append(formattedBioPic + formattedBioMessage);

  if (skills.length > -1) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < skills.length; i++) {
      $("#header").append(HTMLskills.replace("%data%", skills[i]));
    }
  }
};

bio.display();

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
  ],
  display: function() {}
};

work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + formattedWorkTitle +
      formattedWorkLocation + formattedWorkDates + formattedWorkDesc);
  }
};

work.display();

var projects = {
  "project": [
    {
      "title": "HSE KPI Reporting Team Site",
      "dates": "2013-2014",
      "description": "As a BA/PM & developer, I created an HSE KPI reporting site (on SharePoint 2013) for all HSE groups across the organization to collaborate on and meet Vermilion’s key HSE goal. Key benefits include: <br> •	Aligned to support Vermilion’s key overall HSE goal <br> •	Supports HSE KPI reporting process from HSE Advisor input all the way to corporate <br> •	Easy publishing of KPI rollup information to web pages via Microsoft Excel Services",
      "images": []//"./images/197x148.gif"]
    },
    {
      "title": "Online Well Status Form",
      "dates": "2013-2014",
      "description": "As the technical lead, I created and online well status form (on SharePoint 2013) for the Canadian business unit (includes foremans and field admins), measurements, production and joint venture accounting. This solution provides the following key benefits: <br> •	Streamlines the entire process in documenting the change in well status between all parties <br> •	Centrally managed and accessed by all parties <br> •	Supports auditability by storing versions of each hand-off",
      "images": []//"./images/197x148.gif"]
    },
    {
      "title": "Online Travel Request Management Solution",
      "dates": "2013-2014",
      "description": "As a BA/PM & developer, I created and online travel request management solution (on SharePoint 2013) for the travel team, executive assistants group, and Vermilion employee travellers. This solution provides the following key benefits: <br> •	Streamlines travel requests and approvals (on Vermilion's intranet) <br> •	Assists to reconcile accounting and budget issues via auto generation of accounting codes <br> •	Centrally accessible from the intranets \"My Travel Requests\" dashboard",
      "images": []//"./images/197x148.gif"]
    }
  ],
  display: function() {}
};

projects.display = function () {
  for (var proj in projects.project) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[proj].images);
    $(".project-entry:last").append(formattedProjectTitle + "<br>" + formattedProjectDates + "<br>" +
      formattedProjectDesc + "<br>" + formattedProjectImage);
  }
};

projects.display();

var education = {
  "schools": [
    {
      "name": "Udacity",
      "location": "2465 Latham Street 3rd Floor, Mountain View, CA",
      "degree": "Nano Degree",
      "majors": ["Front End Web Developer"],
      "dates": 2015,
      "url": "Online course to front end web development"
    },
    {
      "name": "SAIT",
      "location": "Calgary, AB, Canada",
      "degree": "Bachelors of Applied Information Technology",
      "majors": ["Information Systems Development"],
      "dates": 2010,
      "url": "Information systems architectural analysis"
    }
  ],
  "onlineCourses": [
    "Front End Web Developer",
    "Udacity",
    "NanoDegree",
    2016,
    "http://www.udacity.com"
  ],
  display: function() {}
};

education.display = function () {
  for (var school in education.schools) {
    if (education.schools.hasOwnProperty(school))
    {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDate + formattedSchoolLocation +     formattedSchoolMajor);
    }
  }
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);
  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0]);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[1]);
  var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[3]);
  var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[4]);
  $(formattedOnlineURL).attr('href', 'http://www.udacity.com');
  $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
};

education.display();

function inName(formattedName) {
  formattedName = formattedName.trim().split(" ");
  formattedName[0] = formattedName[0].slice(0, 1).toUpperCase() + formattedName[0].slice(1).toLowerCase();
  formattedName[1] = formattedName[1].toUpperCase();
  var fullName = formattedName.join(" ");
  return fullName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
