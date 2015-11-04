//bio object
var bio = {
  "name": "Alex Rosa",
  "role": "Web Front End Ninja",
  "contacts": {
    "mobile": "403.606.0637",
    "email": "alex.j.rosa@gmail.com",
    "github": "arosa81",
    "twitter": "AlexJRosa",
    "location": "Calgary, AB, Canada",
  },
  "welcomeMessage": "This is my bio - enjoy!",
  "skills": ["HTML", "CSS", "Javascript", "jQuery", "Business Analysis"],
  "biopic": "./images/Alex-Thumb.jpg\" alt=\"Bio Pic",
};

//Replaces html help text with object strings and appends to appropriate site section
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedName + formattedRole);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioMessage = HTMLwelcomeMsg.replace("%data%", "<br>" + bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

  $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
  $("#header").append(formattedBioPic + formattedBioMessage);

  if (bio.skills.length) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }

  //Inject links into work hyperlink elements
  $("span:contains('" + bio.contacts.github + "')").wrapInner('<a></a>');
  $("a:contains('" + bio.contacts.github + "')").attr({
    href: 'https://github.com/arosa81',
    target: '_blank'
  });
  $("span:contains('" + bio.contacts.twitter + "')").wrapInner('<a></a>');
  $("a:contains('" + bio.contacts.twitter + "')").attr({
    href: 'https://twitter.com/AlexJRosa',
    target: '_blank'
  });
};

//work object
var work = {
  "jobs": [
    {
      "employer": "AJR Ideas Consulting ltd.",
      "title": "CEO, Senior Business Analyst",
      "location": "Calgary, AB, Canada",
      "dates": "2012-present",
      "description": "<p>Alex is a thoughtful Technical Business Analyst that enjoys solving problems and providing value added solutions. For over 7 years Alex has been involved in designing and implementing a broad range of information management solutions in the oil & gas and other industries. <br><br> He has worked on numerous initiatives such as:</p> <ul><li>Multilingual global Intranet leveraging SharePoint 2013 and various web technologies (JQuery, CSS, HTML, Web forms and workflows)</li> <li>Development of strategic road maps for adopting a successful ECM solution across the organization</li> <li>Elicit business requirements and analyze business processes to design. Translating them into technically implementable business solutions</li> <li>Data and document migrations</li> <li>Automation of business processes on the SharePoint 2010/2013 platform using web forms and workflows.</li></ul> <br><br><p>Much of his success as a consultant is not only in gaining an understanding of how technology and the business can fit together, but in taking an open, humble, and inclusive approach with clients and managing their business needs.</p>"
    },
    {
      "employer": "Ideaca",
      "title": "SharePoint Business Analyst",
      "location": "Calgary, AB, Canada",
      "dates": "2010-2012",
      "description": "As a Business Analyst working in the Portals and Collaboration group, my responsibilities include: <ul><li>Defining, documenting and implementing processes within the Microsoft suite of products including Microsoft Office SharePoint Server 2007/2010.</li> <li>Installation and configuration of SharePoint Portal and SharePoint Services.</li> <li>Conduct acceptance testing and train customer resources to successfully administer and maintain implemented software.</li> <li>Evaluate business process and recommending improvements.</li> <li>Evaluate new technologies and utilize the appropriate elements to achieve client results.</li>"
    }
  ],
};

//Replaces html help text with object strings and appends to appropriate site section
work.display = function() {
  for (var job=0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + formattedWorkTitle +
      formattedWorkLocation + formattedWorkDates + formattedWorkDesc);

    //Inject links into work hyperlink elements
    $("a:contains('" + work.jobs[job].employer + " - " + work.jobs[job].title + "')").attr({
      href: 'https://ca.linkedin.com/pub/alex-rosa/13/500/49',
      target: '_blank'
    });
  }
};

//projects object
var projects = {
  "project": [
    {
      "title": "HSE KPI Reporting Team Site",
      "dates": "2013-2014",
      "description": "As a BA/PM & developer, I created an HSE KPI reporting site (on SharePoint 2013) for all HSE groups across the organization to collaborate on and meet Vermilion’s key HSE goal. Key benefits include:<ul><li>Aligned to support Vermilion’s key overall HSE goal </li><li>Supports HSE KPI reporting process from HSE Advisor input all the way to corporate </li><li>Easy publishing of KPI rollup information to web pages via Microsoft Excel Services</li></ul>",
      "images": []
    },
    {
      "title": "Online Well Status Form",
      "dates": "2013-2014",
      "description": "As the technical lead, I created an online well status form (on SharePoint 2013) for the Canadian business unit (includes foremans and field admins), measurements, production and joint venture accounting. This solution provides the following key benefits:<ul><li>Streamlines the entire process in documenting the change in well status between all parties</li><li>Centrally managed and accessed by all parties</li><li>Supports auditability by storing versions of each hand-off</li></ul>",
      "images": []
    },
    {
      "title": "Online Travel Request Management Solution",
      "dates": "2013-2014",
      "description": "As a BA/PM & developer, I created and online travel request management solution (on SharePoint 2013) for the travel team, executive assistants group, and Vermilion employee travellers. This solution provides the following key benefits:<ul><li>Streamlines travel requests and approvals (on Vermilion's intranet)</li><li>Assists to reconcile accounting and budget issues via auto generation of accounting codes</li><li>Centrally accessible from the intranets \"My Travel Requests\" dashboard</li></ul>",
      "images": []
    }
  ],
};

//Replaces html help text with object strings and appends to appropriate site section
projects.display = function () {
  for (var proj=0; proj<projects.project.length; proj++) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[proj].images);
    $(".project-entry:last").append(formattedProjectTitle + "<br>" + formattedProjectDates + "<br>" +
      formattedProjectDesc + "<br>" + formattedProjectImage);

    //Inject links into work hyperlink elements
    $("a:contains('" + projects.project[proj].title + "')").attr({
      href: 'https://ca.linkedin.com/pub/alex-rosa/13/500/49',
      target: '_blank'
    });
  }
};

//education object
var education = {
  "schools": [
    {
      "name": "Udacity",
      "location": "2465 Latham Street 3rd Floor, Mountain View, CA",
      "degree": "Front-End Web Developer Nanodegree",
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
};

//Replaces html help text with object strings and appends to appropriate site section
education.display = function () {
  for (var school=0; school<education.schools.length; school++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDate + formattedSchoolLocation + formattedSchoolMajor);

    switch (education.schools[school].degree) {
      case "Bachelors of Applied Information Technology":
        $("a:contains('" + education.schools[school].name + " -- " + education.schools[school].degree + "')").attr({
          href: 'http://www.sait.ca/',
          target: '_blank'
        });
        break;
      case "Front-End Web Developer Nanodegree":
        $("a:contains('" + education.schools[school].name + " -- " + education.schools[school].degree + "')").attr({
          href: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
          target: '_blank'
        });
        break;
      default:
        break;
    }
  }

  //Adding the online courses section
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);
  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0]);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[1]);
  var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[3]);
  var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[4]);
  $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);

  //Inject links into education hyperlink elements
  $("a:contains('" + education.onlineCourses[0] + "')").attr({
    href: 'http://www.udacity.com',
    target: '_blank'
  });
  $("a:contains('" + education.onlineCourses[4] + "')").attr({
    href: 'http://www.udacity.com',
    target: '_blank'
  });
};

//Formats my name to international standards
function inName(formattedName) {
  formattedName = formattedName.trim().split(" ");
  formattedName[0] = formattedName[0].slice(0, 1).toUpperCase() + formattedName[0].slice(1).toLowerCase();
  formattedName[1] = formattedName[1].toUpperCase();
  var fullName = formattedName.join(" ");
  return fullName;
}

//Appends map and internationalize Button
  // $("#main").append(internationalizeButton);
  $("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
