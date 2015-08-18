var name = "Alex Rosa";
var role = "Web Front End Ninja";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName + "<br>" + formattedRole);

var skills = ["awesomeness", "HTML", "CSS", "Javascript"];

if (skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < skills.length; i++) {
    $("#header").append(HTMLskills.replace("%data%", skills[i]));
  }
}

var bio = {
  "name": "Alex <br>",
  "role": "Web Dev <br>",
  "contacts": {
    "mobile": "403.999.9999",
    "email": "alex@example.com",
    "githum": "alex",
    "location": "Calgary"
  },
  "picURL": "<img src='./images/fry.jpg' alt='bio picture' > <br>",
  "welcomeMessage": "This is my bio - enjoy! <br>",
  "skills": skills
};

// $("#main").append(bio.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contacts);
// $("#main").append(bio.picURL);
// $("#main").append(bio.welcomeMessage);
// $("#main").append(bio.skills);
// $("#main").append("<br>");

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

function displayWork() {
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
}

displayWork();

$(document).click(function(loc) {
  console.log("x: " + loc.pageX + " y: " + loc.pageY);
});

var projects = {
  "project": [
    {
      "title": "",
      "dates": "",
      "description": "",
      "image": ""
    },
    {
      "title": "",
      "dates": "",
      "description": "",
      "image": ""
    }
  ]
};

// $("#main").append(work.currentJob);
// $("#main").append(work.employer);
// $("#main").append(work.yearsWorked);
// $("#main").append(work.cityWork);
// $("#main").append("<br>");

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
