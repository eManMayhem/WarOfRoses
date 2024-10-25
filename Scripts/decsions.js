const decisions = {
    
    germany: {
        germanyEvent1: {
            active: true,
            header: "The Luxembourg Situation",
            description: "Recently, Luxembourg has had a lot of civil incidents within their country and seems like they need some aid. How should we help?",
            buttons: [
                { 
                    text: "Temporarily occupy the country.", 
                    action: function() { 
                        chartData.germany[0] -= 3;
                        chartData.germany[1] += 3;
                        chartData.germany[2] -= 3;
                        chartData.germany[3] += 3;
        
                        countries.germany.stats.army -= 1;

                        // Update clickedButton status
                        decisions.germany.germanyEvent1.clickedButton1 = true;
                        decisions.germany.germanyEvent1.clickedButton2 = false;
                        decisions.germany.germanyEvent1.clickedButton3 = false;
        
                        mapImageURL = `./${selectedMap.charAt(0).toUpperCase() + selectedMap.slice(1)}Mode/${"germany".charAt(0).toUpperCase() + "germany".slice(1)}/2.png`;
                        $("titleScreenImg").src = mapImageURL;
                        

                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent1.active = false;

                        decisions.germany.germanyEvent3.active = true;
                    } 
                },
                { 
                    text: "They can handle this on their own.", 
                    action: function() { 
                        chartData.germany[0] -= 1;
                        chartData.germany[1] -= 1;
                        chartData.germany[2] += 3;
                        chartData.germany[3] -= 1;
        
                        // Update clickedButton status
                        decisions.germany.germanyEvent1.clickedButton1 = false;
                        decisions.germany.germanyEvent1.clickedButton2 = true;
                        decisions.germany.germanyEvent1.clickedButton3 = false;
        
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent1.active = false;

                        decisions.germany.germanyEvent2.active = true;
                    } 
                },
                { 
                    text: "Send relief aid and condolences.", 
                    action: function() { 
                        chartData.germany[0] += 3;
                        chartData.germany[1] -= 1;
                        chartData.germany[2] -= 1;
                        chartData.germany[3] -= 1;
        
                        // Update clickedButton status
                        decisions.germany.germanyEvent1.clickedButton1 = false;
                        decisions.germany.germanyEvent1.clickedButton2 = false;
                        decisions.germany.germanyEvent1.clickedButton3 = true;
        
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent1.active = false;

                        decisions.germany.germanyEvent5.active = true;
                    },
                },
            ],
        },
        germanyEvent2: {
            active: false,
            header: "The Luxembourg Situation: Cont.",
            description: "Our people are angry! Many citizens have taken their time to voice their opinions on us not helping the Luxembourgish. Our people are demanding that we at least do something about what is happening in Luxembourg.",
            buttons: [
                {
                    text: "Send aid and apologize to the people for not acting sooner.",
                    action: function() {
                        chartData.germany[0] += 3;
                        chartData.germany[1] += 0;
                        chartData.germany[2] -= 3;
                        chartData.germany[3] += 0;
                        // Update clickedButton status
                        decisions.germany.germanyEvent2.clickedButton1 = true;
                        decisions.germany.germanyEvent2.clickedButton2 = false;
                        decisions.germany.germanyEvent2.clickedButton3 = false;
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent2.active = false;

                        decisions.germany.germanyEvent5.active = true;
                    }
                },
                {
                    text: "Why should we listen to the people? We control the government, not them.",
                    action: function() {
                        chartData.germany[0] -= 3;
                        chartData.germany[1] -= 2;
                        chartData.germany[2] += 5;
                        chartData.germany[3] -= 1;
                        // Update clickedButton status
                        decisions.germany.germanyEvent2.clickedButton1 = false;
                        decisions.germany.germanyEvent2.clickedButton2 = true;
                        decisions.germany.germanyEvent2.clickedButton3 = false;
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent2.active = false;

                        decisions.germany.germanyEvent4.active = true;
                    }
                },
                { 
                    text: "Temporarily occupy the country.", 
                    action: function() { 
                        chartData.germany[0] -= 3;
                        chartData.germany[1] += 3;
                        chartData.germany[2] -= 3;
                        chartData.germany[3] += 3;
        
                        // Update clickedButton status
                        decisions.germany.germanyEvent2.clickedButton1 = false;
                        decisions.germany.germanyEvent2.clickedButton2 = false;
                        decisions.germany.germanyEvent2.clickedButton3 = true;
        
                        mapImageURL = `${selectedMap.charAt(0).toUpperCase() + selectedMap.slice(1)}Mode/${"germany".charAt(0).toUpperCase() + "germany".slice(1)}/2.png`;
                        $("titleScreenImg").src = mapImageURL;
                
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent2.active = false;

                        decisions.germany.germanyEvent3.active = true;
                    } 
                },
            ],
        },
        germanyEvent3: {
            active: false,
            header: "The Luxembourg Situation: Cont.",
            description: "The ex-Luxembourgish president has come to us saying that he is actually a descendant of the great Kaiser! He has asked if there is a spot in the government that he would be able to take. Should we let him in?",
            buttons: [
                {
                    text: "We'll let him into the monarchist party, but not give him any real power.",
                    action: function() {
                        chartData.germany[0] -= 3;
                        chartData.germany[1] += 3;
                        chartData.germany[2] -= 0;
                        chartData.germany[3] -= 0;
                        // Update clickedButton status
                        decisions.germany.germanyEvent3.clickedButton1 = true;
                        decisions.germany.germanyEvent3.clickedButton2 = false;
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent3.active = false;


                    }
                },
                {
                    text: "Who does he think he is? We don't need any foreign pretenders.",
                    action: function() {
                        chartData.germany[0] += 0;
                        chartData.germany[1] -= 3;
                        chartData.germany[2] -= 0;
                        chartData.germany[3] += 3;
                        // Update clickedButton status
                        decisions.germany.germanyEvent3.clickedButton1 = false;
                        decisions.germany.germanyEvent3.clickedButton2 = true;
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent3.active = false;


                    }
                },
            ],
        },
        germanyEvent4: {
            active: false,
            header: "Labor Strikes!",
            description: "Protests have sprouted up all across Germany demanding that we listen to the people and do something to help Luxembourg! They have stated that they will no longer work until something is done. Do we give in to these protests?",
            buttons: [
                {
                    text: "Put the protesters down like the scum they are. We'll make them see the errors of their ways.",
                    action: function() {
                        chartData.germany[0] -= 8;
                        chartData.germany[1] -= 1;
                        chartData.germany[2] += 10;
                        chartData.germany[3] -= 1;
                        // Update clickedButton status
                        decisions.germany.germanyEvent4.clickedButton1 = true;
                        decisions.germany.germanyEvent4.clickedButton2 = false;
                        decisions.germany.germanyEvent4.clickedButton3 = false;
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent4.active = false;
                    }
                },
                {
                    text: "Let them protest for a bit, let's see how far we can push this.",
                    action: function() {
                        chartData.germany[0] -= 3;
                        chartData.germany[1] -= 1;
                        chartData.germany[2] += 5;
                        chartData.germany[3] -= 1;
                        // Update clickedButton status
                        decisions.germany.germanyEvent4.clickedButton1 = false;
                        decisions.germany.germanyEvent4.clickedButton2 = true;
                        decisions.germany.germanyEvent4.clickedButton3 = false;                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent4.active = false;
                    }
                },
                {
                    text: "Agree to the protester's demands. We must listen to the people.",
                    action: function() {
                        chartData.germany[0] += 3;
                        chartData.germany[1] -= 0;
                        chartData.germany[2] -= 3;
                        chartData.germany[3] += 0;
                        // Update clickedButton status
                        decisions.germany.germanyEvent4.clickedButton1 = false;
                        decisions.germany.germanyEvent4.clickedButton2 = false;
                        decisions.germany.germanyEvent4.clickedButton3 = true;                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();

                        decisions.germany.germanyEvent4.active = false;

                    }
                },
            ],
        },
        germanyEvent5: {
            active: false,
            header: "Germany Democratic Path Coming Soon!",
            description: "This game is obviously still under development, and I couldn't finish all of it in time cause of how much there is and how little time I had to work on it. Stay tuned! More content to come! (just hit the refresh button to restart)",
            buttons: [
                {
                    text: "Yippee!",
                    action: function() {
                        chartData.germany[0] -= 0;
                        chartData.germany[1] -= 0;
                        chartData.germany[2] -= 0;
                        chartData.germany[3] -= 0;
                        // Update clickedButton status
                        decisions.germany.germanyEvent5.clickedButton1 = true;
                        decisions.germany.germanyEvent5.clickedButton2 = false;
                        decisions.germany.germanyEvent5.clickedButton3 = false;
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.germany;
                        pieChart2.update();
                        decisions.germany.germanyEvent5.active = false;
                    }
                }
            ],
        },
    },
    poland: {
        polandEvent1: {
            active: true,
            header: "A Polish Queen?",
            description: "Last night, the newly elected president of Poland, Jadwiga 2nd, announced that she would be taking complete control of the government, reorganizing it into the Kingdom of Poland. Many stand with her and support her as their new queen, however, there are still many people concerned that this may lead Poland down a dark path.",
            buttons: [
                { 
                    text: "We must make them see this new way of thinking!", 
                    action: function() { 
                        chartData.poland[0] -= 1;
                        chartData.poland[1] += 3;
                        chartData.poland[2] -= 1;
                        chartData.poland[3] -= 1;
        
                        // Update clickedButton status
                        decisions.poland.polandEvent1.clickedButton1 = true;
                        decisions.poland.polandEvent1.clickedButton2 = false;
                        decisions.poland.polandEvent1.clickedButton3 = false;
        
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.poland;
                        pieChart2.update();

                        decisions.poland.polandEvent1.active = false;
                    } 
                },
                { 
                    text: "We must oppose the queen any way we can!", 
                    action: function() { 
                        chartData.poland[0] -= 3;
                        chartData.poland[1] -= 3;
                        chartData.poland[2] += 3;
                        chartData.poland[3] += 3;
        
                        // Update clickedButton status
                        decisions.poland.polandEvent1.clickedButton1 = false;
                        decisions.poland.polandEvent1.clickedButton2 = true;
                        decisions.poland.polandEvent1.clickedButton3 = false;
        
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.poland;
                        pieChart2.update();
                    } 
                },
                { 
                    text: "This is an insult to democrocy!", 
                    action: function() { 
                        chartData.poland[0] += 3;
                        chartData.poland[1] -= 1;
                        chartData.poland[2] -= 1;
                        chartData.poland[3] -= 1;
        
                        // Update clickedButton status
                        decisions.poland.polandEvent1.clickedButton1 = false;
                        decisions.poland.polandEvent1.clickedButton2 = false;
                        decisions.poland.polandEvent1.clickedButton3 = true;
        
                        // Update pie chart 2
                        pieChart2.data.datasets[0].data = chartData.poland;
                        pieChart2.update();
                    } 
                },
            ],
            clickedButton1: false,
            clickedButton2: false,
            clickedButton3: false
        }
    },
};