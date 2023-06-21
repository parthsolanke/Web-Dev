var app = angular.module("app", ['ngRoute']);
// factories = data 

app.factory('subject', function() {

    var service = {};

    service.pmap = new Map([
        [0, 'OPENNESS'],
        [1, 'CONSCIENTIOUSNESS'],
        [2, 'EXTRAVERSION'],
        [3, 'AGREEABLENESS'],
        [4, 'NEUROTICISM']
    ]);

    service.imap = new Map([
        [0, 'Logical and Mathematical'],
        [1, 'Visual and Spatial'],
        [2, 'Linguistic'],
        [3, 'Musical '],
        [4, 'Bodily Kinesthetics'],
        [5, 'Interpersonal '],
        [6, 'Intrapersonal'],
        [7, 'Naturalistic'],
        [8, 'Existential']
    ]);

    return service;
});

app.factory('questiondata', function() {

    var service = {}

    service.personality = [
        [0, "Would you like if the position of your work desk gets slightly changed?", ],
        [0, "Are you open to try bungee jumping? "],
        [0, "Do you like and enjoy to take up and solve new challenges?"],
        [0, "Do you like the abstract thinking of children?"],
        [0, "Have you ever disassembled and assembled any thing just out of curiosity?"],
        [1, "Do you spend enough time in order to prepare for an occasion or event?"],
        [1, "Do you enjoy solving “find the mistake in the picture” quizzes?"],
        [1, "Do you like being on time a follow the schedule throughout the day? "],
        [1, "Do you think you are a perfectionist"],
        [1, "Do you prioritize important work to do before and complete the certain task? "],
        [2, "Do you often start conversations with strangers?"],
        [2, "Do you like having wide social circle of friends and acquaintances?"],
        [2, "Do you feel energized being surrounded with people?  "],
        [2, "You don’t like to give thought about what you are going to speak? "],
        [2, "Do you like being the centre of attention? g."],
        [3, "Do you care about the cries going on in our society? "],
        [3, "Do you feel empathy about the people who are below poverty line?"],
        [3, "Have you ever assisted or helped the people in crisis? "],
        [3, "You don’t care about other people judging you? "],
        [3, "Do you enjoy making other people happy? "],
        [4, "Do you go through a lot of stress in certain conditions?"],
        [4, "There are dramatic shifts in your mood?"],
        [4, "You often get upset? "],
        [4, "You fee anxious a lot? "],
        [4, "You struggle to get normal after a stressful event? "],
    ];

    service.interest = [
        [0, "I like measuring or categorizing stuff."],
        [0, "I have always excelled in math and science at school."],
        [0, "I enjoy challenges that require lateral thinking, like chess."],
        [0, "I am good with numbers."],

        [1, "I enjoy sequential puzzles like Rubik’s cube or Sudoku"],
        [1, "I vividly remember details about furniture and the interior decoration of rooms that I’ve been in"],
        [1, "I am good at reading maps and finding my way around unfamiliar places"],
        [1, "I like sewing, carving, model-building, or other activities that involve dexterity."],

        [2, "I am interested in writing poetry, quotes, stories, or journals."],
        [2, "I like languages and/or the social sciences."],
        [2, "I often look things up in the dictionary."],
        [2, "I love reading."],

        [3, "I enjoy singing or playing a musical instrument."],
        [3, "I am often humming a song or tune to myself in my head."],
        [3, "I enjoy creative writing.Music is one of my biggest interests."],
        [3, "I can tell when a note is off-key."],

        [4, "I find it easiest to solve problems when my body is in motion"],
        [4, "I am interested in sports."],
        [4, "I understand everything after practical performing. "],
        [4, "I can’t seat stable at 1 place for more than half hour. "],

        [5, "I like dancing, sports, or working out."],
        [5, "I am good at making a good impression when meeting new people."],
        [5, "I am good at mediating disputes or conflicts between individuals."],
        [5, "Others often come to me for support or advice."],

        [6, "I am good at detecting dishonesty in others."],
        [6, "I spend a lot of time analysing my own emotions and reactions."],
        [6, "I enjoy spending time alone, processing my own emotions and reactions to things."],
        [6, "It is easy for me to identify how I feel and why."],

        [7, "I spend a lot of time reflecting on my own reactions to things."],
        [7, "I don’t mind getting my hands dirty from activities that involve creating, fixing, or building things."],
        [7, "I feel the most alive when I am in contact with nature."],
        [7, "I enjoy learning about different species of plants and animals"],

        [8, "I keep going over deep questions about life and existence that seem foolish to others."],
        [8, "I enjoy learning about how the various world religions have attempted to answer “the big questions.”"],
        [8, "I often contemplate questions related to theology or philosophy."],
        [8, "Questions like “Where is humanity heading?” or Why are we here?” are of interest to me."],
    ];

    return service;

});


app.factory('user', function() {

    var service = {};
    service.username = 'User';

    service.personality = 1;
    service.interest = [0, 7, 3];

    service.personalityarray = [0, 0, 0, 0, 0, 0];
    service.interestarray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    return service;


});

app.factory('career', function() {

    var service = {};

    service.careersarray = [
        { name: 'SINGER', personality: 0, interest: [4, 5, 6], id: 0, data: {} },
        { name: 'COUNSELOR', personality: 0, interest: [4, 5, 6], id: 1, data: {} },
        { name: 'POLITICIAN', personality: 0, interest: [4, 5, 1], id: 2, data: {} },
        { name: 'HOST', personality: 0, interest: [1, 4, 0], id: 3, data: {} },
        { name: 'DISC/RADIO JOCKEY', personality: 0, interest: [0, 7, 8], id: 4, data: {} },
        { name: 'DOCTOR', personality: 1, interest: [7, 5, 3], id: 5, data: {} },
        { name: 'ENTREPRENEUR', personality: 1, interest: [2, 8, 6], id: 6, data: {} },
        { name: 'ACTOR', personality: 1, interest: [7, 3, 5, 1], id: 7, data: {} },
        { name: 'FREELANCER WRITER', personality: 1, interest: [3, 4, 2], id: 8, data: {} },
        { name: 'MARKETING CONSALTANT', personality: 1, interest: [7, 5, 2], id: 9, data: {} },
        { name: 'SALES MANAGER', personality: 2, interest: [4, 3, 2], id: 10, data: {} },
        { name: 'TEACHER', personality: 2, interest: [2, 4, 6], id: 11, data: {} },
        { name: 'LAWYER', personality: 2, interest: [5, 8, 2], id: 12, data: {} },
        { name: 'SOCIAL WORKER', personality: 2, interest: [6, 8, 1], id: 13, data: {} },
        { name: 'FLIGHT ATTENDANT', personality: 2, interest: [8, 1, 3], id: 14, data: {} },
        { name: 'JUDGE', personality: 3, interest: [1, 0, 8], id: 15, data: {} },
        { name: 'RELIGIOUS LEADER', personality: 3, interest: [4, 0, 8], id: 16, data: {} },
        { name: 'NURSE', personality: 3, interest: [4, 2, 0], id: 17, data: {} },
        { name: 'NON-PROFIT ORGANISER', personality: 3, interest: [1, 8, 0], id: 18, data: {} },
        { name: 'VETERINARIAN', personality: 3, interest: [2, 6, 7], id: 19, data: {} },
        { name: 'WRITER', personality: 4, interest: [3, 4, 8], id: 20, data: {} },
        { name: 'ARTIST', personality: 4, interest: [5, 6, 0], id: 21, data: {} },
        { name: 'FLORIIST', personality: 4, interest: [6, 7, 1], id: 22, data: {} },
        { name: 'ACCOUNTANT', personality: 4, interest: [1, 6, 7], id: 23, data: {} },
        { name: 'YOGA INSTUCTOR', personality: 4, interest: [5, 6, 1], id: 24, data: {} },



    ];
    return service;

});

app.controller('start', function($scope) {



})

app.controller('first', function($scope, questiondata, user) {

    $scope.qcount = 0;

    $scope.totalquestions = questiondata.personality.length;

    $scope.currentquestion = questiondata.personality[$scope.qcount][1];
    $scope.currentquestionpersonality = questiondata.personality[$scope.qcount][0]

    $scope.choosevalue;

    $scope.nextquestion = function() {

        var availableoptions = document.getElementsByClassName("availableoptions");

        for (var i = 0; i < availableoptions.length; i++) {
            availableoptions[i].checked = false;
        }


        if ($scope.choosevalue == 2) {
            user.personalityarray[$scope.currentquestionpersonality] = user.personalityarray[$scope.currentquestionpersonality] + 0.25;
        }
        if ($scope.choosevalue == 3) {
            user.personalityarray[$scope.currentquestionpersonality] = user.personalityarray[$scope.currentquestionpersonality] + 0.5;
        }
        if ($scope.choosevalue == 4) {
            user.personalityarray[$scope.currentquestionpersonality] = user.personalityarray[$scope.currentquestionpersonality] + 0.75;
        }
        if ($scope.choosevalue == 5) {
            user.personalityarray[$scope.currentquestionpersonality] = user.personalityarray[$scope.currentquestionpersonality] + 1;
        }

        ++$scope.qcount;

        if ($scope.qcount < questiondata.personality.length) {

            console.log(user.personalityarray);

            $scope.currentquestion = questiondata.personality[$scope.qcount][1];
            $scope.currentquestionpersonality = questiondata.personality[$scope.qcount][0]
        }

        if ($scope.qcount == questiondata.personality.length) {

            console.log(user.personalityarray);

            var form = document.getElementsByTagName('form');
            form[0].remove();

        }

    }

});

app.controller('second', function($scope, questiondata, user) {

    $scope.qcount = 0;

    $scope.totalquestions = questiondata.interest.length;

    $scope.currentquestion = questiondata.interest[$scope.qcount][1];
    $scope.currentquestionpersonality = questiondata.interest[$scope.qcount][0]

    $scope.choosevalue;

    $scope.nextquestion = function() {

        var availableoptions = document.getElementsByClassName("availableoptions");

        for (var i = 0; i < availableoptions.length; i++) {
            availableoptions[i].checked = false;
        }

        if ($scope.choosevalue == 2) {
            user.interestarray[$scope.currentquestionpersonality] = user.interestarray[$scope.currentquestionpersonality] + 0.25;
        }
        if ($scope.choosevalue == 3) {
            user.interestarray[$scope.currentquestionpersonality] = user.interestarray[$scope.currentquestionpersonality] + 0.5;
        }
        if ($scope.choosevalue == 4) {
            user.interestarray[$scope.currentquestionpersonality] = user.interestarray[$scope.currentquestionpersonality] + 0.75;
        }
        if ($scope.choosevalue == 5) {
            user.interestarray[$scope.currentquestionpersonality] = user.interestarray[$scope.currentquestionpersonality] + 1;
        }


        ++$scope.qcount;

        if ($scope.qcount < questiondata.interest.length) {

            console.log(user.interestarray);

            $scope.currentquestion = questiondata.interest[$scope.qcount][1];
            $scope.currentquestionpersonality = questiondata.interest[$scope.qcount][0]

        }

        if ($scope.qcount == questiondata.interest.length) {

            console.log(user.interestarray);

            var form = document.getElementsByTagName('form');
            form[0].remove();

        }




    }

});

app.controller('third', function($scope, user, subject) {


    $scope.username = user.username;


    function personalityf(parray) {

        var max = parray[0];
        var pos = 0;
        for (var i = 1; i < parray.length; i++) {
            if (max < parray[i]) {
                max = parray[i];
                pos = i;
            }
        }

        return pos;

    }

    function personalityf(parray) {

        var max = parray[0];
        var pos = 0;
        for (var i = 1; i < parray.length; i++) {
            if (max < parray[i]) {
                max = parray[i];
                pos = i;
            }
        }

        return pos;

    }

    user.personality = personalityf(user.personalityarray, subject.pmap);
    user.personality = personalityf(user.personalityarray, subject.pmap);
    $scope.personality = subject.pmap.get(user.personality);


    function interestf(iarray) {
        //console.log(iarray)
        //console.log(iarray.length)
        var passarray = [];
        for (var i = 0; i < iarray.length; i++) {
            if (iarray[i] >= 2) {

                passarray.push(i);
            }
        }

        return passarray;
    }

    function interestScore(iarray) {
        //console.log(iarray)
        //console.log(iarray.length)
        var passarray = [];
        for (var i = 0; i < iarray.length; i++) {
            if (iarray[i] >= 2) {

                passarray.push((iarray[i] / 4) * 100);
            }
        }

        return passarray;
    }

    user.interest = interestf(user.interestarray);
    user.interestScore = interestScore(user.interestarray);

    $scope.interest = [];
    $scope.interest1 = {};
    $scope.interestScore = {};

    for (var i = 0; i < user.interest.length; i++) {

        $scope.interest.push(subject.imap.get(user.interest[i]));
        $scope.interest1[subject.imap.get(user.interest[i])] = user.interestScore[i]
        $scope.interestScore[i] = user.interestScore[i];
    }




});

app.controller('career', function($scope, career, user) {

    $scope.careernames = [];
    console.log(career.careersarray);

    function matchcareer3(career, user) {

        var idarray = [];
        console.log(user);
        console.log(career);
        for (var i = 0; i < career.length; i++) {

            if (career[i].personality == user.personality) {

                if (JSON.stringify(career[i].interest) == JSON.stringify(user.interest)) {
                    idarray.push(career[i].id);
                }

            }

        }

        //return idarray;

    }

    function matchcareer1(career, user) {

        var idarray = [];
        console.log(user);
        console.log(career);
        for (var i = 0; i < career.length; i++) {

            var flag = 0;
            if (user.personality == career[i].personality) {

                for (var j = 0; j < user.interest.length; j++) {

                    for (var k = 0; k < career[i].interest.length; k++) {

                        if (user.interest[j] == career[i].interest[k]) {

                            flag = 1;
                            break;

                        }

                    }
                    if (flag == 1) break;

                }

            }
            if (flag == 1)
                idarray.push(career[i].id);


        }

        return idarray;

    }

    var careeridarray = matchcareer3(career.careersarray, user);
    var careeridarray = matchcareer1(career.careersarray, user);

    for (var i = 0; i < careeridarray.length; i++) {

        $scope.careernames.push(career.careersarray[careeridarray[i]].name);

    }

    console.log($scope.careernames);


})


// routing 

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {

            templateUrl: 'html/start.html',
            controller: 'start'

        })
        .when('/first', {

            templateUrl: 'html/first.html',
            controller: 'first'

        })
        .when('/second', {

            templateUrl: 'html/second.html',
            controller: 'second'

        })
        .when('/third', {

            templateUrl: 'html/third.html',
            controller: 'third'

        })
        .when('/career', {

            templateUrl: 'html/career.html',
            controller: 'career'

        })

}])