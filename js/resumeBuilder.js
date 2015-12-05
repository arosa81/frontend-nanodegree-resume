var model = {
  bio: {
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
  },
  work: {
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
  },
  project: {
    "projects": [
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
  },
  education: {
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
      {
        "onlineTitle": "Front End Web Developer",
        "onlineSchool": "Udacity",
        "onlineDegree": "NanoDegree",
        "onlineDate": 2016,
        "onlineURL": "http://www.udacity.com"
      }
    ],
  }
};

var controller = {
  init: function() {
    view.init();
  },
  formatBIO: function() {
    model.bio.formattedName = HTMLheaderName.replace("%data%", model.bio.name);
    model.bio.formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
    model.bio.formattedMobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
    model.bio.formattedEmail = HTMLemail.replace("%data%", model.bio.contacts.email);
    model.bio.formattedGitHub = HTMLgithub.replace("%data%", model.bio.contacts.github);
    model.bio.formattedTwitter = HTMLtwitter.replace("%data%", model.bio.contacts.twitter);
    model.bio.formattedLocation = HTMLlocation.replace("%data%", model.bio.contacts.location);
    model.bio.formattedBioMessage = HTMLwelcomeMsg.replace("%data%", "<br>" + model.bio.welcomeMessage);
    model.bio.formattedBioPic = HTMLbioPic.replace("%data%", model.bio.biopic);
  },
  getFormattedName: function() {
    return model.bio.formattedName;
  },
  getFormattedRole: function() {
    return model.bio.formattedRole;
  },
  getFormattedMobile: function() {
    return model.bio.formattedMobile;
  },
  getFormattedEmail: function() {
    return model.bio.formattedEmail;
  },
  getFormattedGitHub: function() {
    return model.bio.formattedGitHub;
  },
  getFormattedTwitter: function() {
    return model.bio.formattedTwitter;
  },
  getFormattedLocation: function() {
    return model.bio.formattedLocation;
  },
  getFormattedBioMessage: function() {
    return model.bio.formattedBioMessage;
  },
  getFormattedBioPic: function() {
    return model.bio.formattedBioPic;
  },
  getSkills: function() {
    return model.bio.skills;
  },
  formatWork: function(job) {
    model.work.jobs[job].formattedEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[job].employer);
    model.work.jobs[job].formattedWorkTitle = HTMLworkTitle.replace("%data%", model.work.jobs[job].title);
    model.work.jobs[job].formattedWorkLocation = HTMLworkLocation.replace("%data%", model.work.jobs[job].location);
    model.work.jobs[job].formattedWorkDates = HTMLworkDates.replace("%data%", model.work.jobs[job].dates);
    model.work.jobs[job].formattedWorkDesc = HTMLworkDescription.replace("%data%", model.work.jobs[job].description);
  },
  getFormattedEmployer: function(job) {
    return model.work.jobs[job].formattedEmployer;
  },
  getFormattedWorkTitle: function(job) {
    return model.work.jobs[job].formattedWorkTitle;
  },
  getFormattedWorkLocation: function(job) {
    return model.work.jobs[job].formattedWorkLocation;
  },
  getFormattedWorkDates: function(job) {
    return model.work.jobs[job].formattedWorkDates;
  },
  getFormattedWorkDesc: function(job) {
    return model.work.jobs[job].formattedWorkDesc;
  },
  getJobs: function() {
    return model.work.jobs;
  },
  formatProjects: function(proj) {
    model.project.projects[proj].formattedProjectTitle = HTMLprojectTitle.replace("%data%", model.project.projects[proj].title);
    model.project.projects[proj].formattedProjectDates = HTMLprojectDates.replace("%data%", model.project.projects[proj].dates);
    model.project.projects[proj].formattedProjectDesc = HTMLprojectDescription.replace("%data%", model.project.projects[proj].description);
    model.project.projects[proj].formattedProjectImage = HTMLprojectImage.replace("%data%", model.project.projects[proj].images);
  },
  getFormattedProjectTitle: function(proj) {
    return model.project.projects[proj].formattedProjectTitle;
  },
  getFormattedProjectDates: function(proj) {
    return model.project.projects[proj].formattedProjectDates;
  },
  getFormattedProjectDesc: function(proj) {
    return model.project.projects[proj].formattedProjectDesc;
  },
  getFormattedProjectImage: function(proj) {
    return model.project.projects[proj].formattedProjectImage;
  },
  getProjects: function() {
    return model.project.projects;
  },
  formatEducation: function(school) {
    model.education.schools[school].formattedSchoolName = HTMLschoolName.replace("%data%", model.education.schools[school].name);
    model.education.schools[school].formattedSchoolDegree = HTMLschoolDegree.replace("%data%", model.education.schools[school].degree);
    model.education.schools[school].formattedSchoolMajor = HTMLschoolMajor.replace("%data%", model.education.schools[school].majors);
    model.education.schools[school].formattedSchoolLocation = HTMLschoolLocation.replace("%data%", model.education.schools[school].location);
    model.education.schools[school].formattedSchoolDate = HTMLschoolDates.replace("%data%", model.education.schools[school].dates);
  },
  getFormattedSchoolName: function(school) {
    return model.education.schools[school].formattedSchoolName;
  },
  getFormattedSchoolDegree: function(school) {
    return model.education.schools[school].formattedSchoolDegree;
  },
  getFormattedSchoolMajor: function(school) {
    return model.education.schools[school].formattedSchoolMajor;
  },
  getFormattedSchoolLocation: function(school) {
    return model.education.schools[school].formattedSchoolLocation;
  },
  getFormattedSchoolDate: function(school) {
    return model.education.schools[school].formattedSchoolDate;
  },
  getSchools: function() {
    return model.education.schools;
  },
  formatOnlineEducation: function(course) {
    model.education.onlineCourses[course].formattedOnlineTitle = HTMLonlineTitle.replace("%data%", model.education.onlineCourses[course].onlineTitle);
    model.education.onlineCourses[course].formattedOnlineSchool = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[course].onlineSchool);
    model.education.onlineCourses[course].formattedOnlineDates = HTMLonlineDates.replace("%data%", model.education.onlineCourses[course].onlineDate);
    model.education.onlineCourses[course].formattedOnlineURL = HTMLonlineURL.replace("%data%", model.education.onlineCourses[course].onlineURL);
  },
  getFormattedOnlineTitle: function(course) {
    return model.education.onlineCourses[course].formattedOnlineTitle;
  },
  getFormattedOnlineSchool: function(course) {
    return model.education.onlineCourses[course].formattedOnlineSchool;
  },
  getFormattedOnlineDates: function(course) {
    return model.education.onlineCourses[course].formattedOnlineDates;
  },
  getFormattedOnlineURL: function(course) {
    return model.education.onlineCourses[course].formattedOnlineURL;
  },
  getOnlineSchools: function() {
    return model.education.onlineCourses;
  }
};

var view = {
  init: function() {
    this.displayBIO();
    this.displayWork();
    this.displayProjects();
    this.displayEducation();
    this.displayOnlineEducation();
    this.displayMap();
  },
  displayBIO: function() {
    controller.formatBIO();
    var numSkills = controller.getSkills().length;

    $("#header").prepend(controller.getFormattedName() + controller.getFormattedRole());
    $("#topContacts, #footerContacts").append(controller.getFormattedMobile() + controller.getFormattedEmail() + controller.getFormattedGitHub() + controller.getFormattedTwitter() + controller.getFormattedLocation());
    $("#header").append(controller.getFormattedBioPic() + controller.getFormattedBioMessage());

    if (numSkills) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < numSkills; i++) {
        $("#header").append(HTMLskills.replace("%data%", controller.getSkills()[i]));
      }
    }

    //Inject links into work hyperlink elements
    $("span:contains('" + $(controller.getFormattedGitHub()).children('span:last-child').text() + "')").wrapInner('<a></a>');
    $("a:contains('" + $(controller.getFormattedGitHub()).children('span:last-child').text() + "')").attr({
      href: 'https://github.com/arosa81',
      target: '_blank'
    });
    $("span:contains('" + $(controller.getFormattedTwitter()).children('span:last-child').text() + "')").wrapInner('<a></a>');
    $("a:contains('" + $(controller.getFormattedTwitter()).children('span:last-child').text() + "')").attr({
      href: 'https://twitter.com/AlexJRosa',
      target: '_blank'
    });
  },
  displayWork: function() {
    var totalJobs = controller.getJobs().length;
    for (var job=0; job < totalJobs; job++) {
      $("#workExperience").append(HTMLworkStart);
      controller.formatWork(job);
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(controller.getFormattedEmployer(job) + controller.getFormattedWorkTitle(job) + controller.getFormattedWorkLocation(job) + controller.getFormattedWorkDates(job) + controller.getFormattedWorkDesc(job));

      //Inject links into work hyperlink elements
      $("a:contains('" + controller.getJobs()[job].employer + " - " + controller.getJobs()[job].title + "')").attr({
        href: 'https://ca.linkedin.com/pub/alex-rosa/13/500/49',
        target: '_blank'
      });
    }
  },
  displayProjects: function() {
    var totalProjects = controller.getProjects().length;
    for (var proj = 0; proj < totalProjects; proj++) {
      $("#projects").append(HTMLprojectStart);
      controller.formatProjects(proj);

      $(".project-entry:last").append(controller.getFormattedProjectTitle(proj) + "<br>" + controller.getFormattedProjectDates(proj) + "<br>" + controller.getFormattedProjectDesc(proj));

      //Inject links into work hyperlink elements
      $("a:contains('" + controller.getProjects()[proj].title + "')").attr({
        href: 'https://ca.linkedin.com/pub/alex-rosa/13/500/49',
        target: '_blank'
      });
    }
  },
  displayEducation: function() {
    var totalSchools = controller.getSchools().length;
    for (var school = 0; school < totalSchools; school++) {
      $("#education").append(HTMLschoolStart);
      controller.formatEducation(school);

      $(".education-entry:last").append(controller.getFormattedSchoolName(school) + controller.getFormattedSchoolDegree(school) + controller.getFormattedSchoolDate(school) + controller.getFormattedSchoolLocation(school) + controller.getFormattedSchoolMajor(school));

      switch (controller.getSchools()[school].degree) {
        case "Bachelors of Applied Information Technology":
          $("a:contains('" + controller.getSchools()[school].name + " -- " + controller.getSchools()[school].degree + "')").attr({
            href: 'http://www.sait.ca/',
            target: '_blank'
          });
          break;
        case "Front-End Web Developer Nanodegree":
          $("a:contains('" + controller.getSchools()[school].name + " -- " + controller.getSchools()[school].degree + "')").attr({
            href: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
            target: '_blank'
          });
          break;
        default:
          break;
      }
    }
  },
  displayOnlineEducation: function() {
    var totalOnlineCourses = controller.getOnlineSchools().length;
    for (var course = 0; course < totalOnlineCourses; course++) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      controller.formatOnlineEducation(course);

      $(".education-entry:last").append(controller.getFormattedOnlineTitle(course) + controller.getFormattedOnlineSchool(course) + controller.getFormattedOnlineDates(course) + controller.getFormattedOnlineURL(course));

      //Inject links into education hyperlink elements
      $("a:contains('" + controller.getOnlineSchools()[course].onlineTitle + "')").attr({
        href: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
        target: '_blank'
      });
      $("a:contains('" + controller.getOnlineSchools()[course].onlineURL + "')").attr({
        href: 'http://www.udacity.com',
        target: '_blank'
      });

    }
  },
  displayMap: function() {
    $("#mapDiv").append(googleMap);
    console.log(model);
  }
};

controller.init();
