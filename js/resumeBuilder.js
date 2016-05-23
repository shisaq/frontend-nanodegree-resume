/**
* Define 4 objects: bio, work, projects, education
* @shisaq
*/
var bio = {
  "name": "shisaq lee",
  "role": "Front-end Developer",
  "contacts": {
    "mobile": "412-500-2278",
    "email": "shisaq@gmail.com",
    "twitter": "shisaq",
    "github": "shisaq",
    "blog": "shisaq.com",
    "location": "Pittsburgh, PA, USA"
  },
  "picture_URL": "images/mypic.png",
  "welcomeMessage": "Welcome, Dear Udacity Reviewer!",
  "skills": [
    "Ukulele",
    "HTML",
    "WordPress",
    "Premiere",
    "Photoshop"
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Tsinghua University",
      "title": "Lab Manager",
      "location": "Beijing, China",
      "dates": "Sep 1st, 2015 -- Feb 28th, 2016",
      "description": "I was in charge of Yigong Shi's laboratory"
    },
    {
      "employer": "Peking University",
      "title": "Program Manager",
      "location": "Beijing, China",
      "dates": "Sep 1st, 2014 -- Aug 31th, 2015",
      "description": "I was in charge of the website of Social Media Center"
    },
    {
      "employer": "CTVIT",
      "title": "IT Consultant",
      "location": "Beijing, China",
      "dates": "Feb 1st, 2012 -- Feb 28th, 2013",
      "description": "I was in charge of News Prodect System"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "My First Website",
      "dates": "May 1st, 2016 -- May 18th, 2016",
      "description": "I learned the technique in Udacity",
      "images": [
        "images/001.jpg",
        "images/002.jpg"
      ]
    },
    {
      "title": "Lab Website",
      "dates": "Jur 1st, 2016 -- May 17th, 2016",
      "description": "This is the first website I established",
      "images": [
        "images/005.jpg",
        "images/006.jpg"
      ]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Nanyang Institute of Technology",
      "location": "Beijing, China",
      "degree": "Bechelor",
      "majors": [
        "Software Engineering",
        "Chinese",
        "Math"
      ],
      "dates": 2008,
      "url": "http://soft-bysj.nyist.net/"
    },
    {
      "name": "Nanzhao High School",
      "location": "Nanyang, China",
      "degree": "N.O.",
      "majors": [
        "English",
        "Chinese",
        "Hostory",
        "Math"
      ],
      "dates": 2005,
      "url": "http://www.nzxdzx.com/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-end Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }
  ]
};

/**
* Encapsulate displays in each objects
* @shisaq
*/
// bio.display starts
bio.display = function () {
  //make each first letter of the name to uppercase
  var nameArray = bio.name.trim().split(' ');
  var newNameArray = [];
  nameArray.forEach( function(val) {
    val = val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase();
    newNameArray.push(val);
  });
  var newName = newNameArray.join(' ');

  //add name and role
  var formattedName = HTMLheaderName.replace('%data%', newName);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);

  // Add contacts

  // This is a generic method, but I have no idea on adding a tag and define the content of each one, so I gave up on this.
  // for (contact in bio.contacts) {
  //   if (bio.contacts.hasOwnProperty(contact)) {
  //     var formattedContact = HTMLcontactGeneric.replace('%contact%', contact);
  //     formattedContact = formattedContact.replace('%data%', bio.contacts[contact]);

  //     $('#topContacts').append(formattedContact);
  //   }
  // }

  // This version contains a tag
  var formattedMobile = HTMLmobile.replace('%data%', '<a href="tel:' + bio.contacts.mobile + '" target="new">' + bio.contacts.mobile + '</a>');
  var formattedEmail = HTMLemail.replace('%data%', '<a href="mailto:' + bio.contacts.email + '" target="new">' + bio.contacts.email + '</a>');
  var formattedTwitter = HTMLtwitter.replace('%data%', '<a href="https://twitter.com/' + bio.contacts.twitter + '" target="new">' + bio.contacts.twitter + '</a>');
  var formattedGithub = HTMLgithub.replace('%data%', '<a href="https://github.com/' + bio.contacts.github + '" target="new">' + bio.contacts.github + '</a>');
  var formattedBlog = HTMLblog.replace('%data%', '<a href="http://' + bio.contacts.blog + '" target="new">' + bio.contacts.blog + '</a>');
  var formattedLocation = HTMLlocation.replace('%data%', '<a href="https://www.google.com/maps/place/' + bio.contacts.location + '" target="new">' + bio.contacts.location + '</a>');

  var formattedContact = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedBlog + formattedLocation;
  $('#topContacts').append(formattedContact);

  //add bio picture and welcome message
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.picture_URL);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $('#header').append(formattedBioPic);
  $('#header').append(formattedWelcomeMsg);

  //add skills
  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace('%data%', skill);
      $('#skills').append(formattedSkill);
    });
  }
}
bio.display();

work.display = function () {
  $('#workExperience').append(HTMLworkStart);

  work.jobs.forEach( function(job) {
    var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
    var formattedDates = HTMLworkDates.replace('%data%', job.dates);
    var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
    var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

    var formattedJob = formattedEmployer + formattedTitle + formattedDates +formattedLocation + formattedDescription;
    $('.work-entry').append(formattedJob);
  });
}
work.display();

project.display = function () {
  $('#projects').append(HTMLprojectStart);


}
project.display();
