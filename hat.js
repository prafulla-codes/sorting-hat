
const TEAMS = {
    GRYFFINDOR : 1,
    SLYTHERIN : 2,
    RAVENCLAW : 3,
    HUFFLEPUFF : 4
}

let CURRENT_TEAM = 0;
class Hat {

    static THOUGHTS = [
        {
            thought: "Feeling Brave, are you?",
            team: TEAMS.GRYFFINDOR
        },
        {
            thought : "You seem to be the chivalrous sort",
            team : TEAMS.GRYFFINDOR
        },
        {
            thought : "A bottomless well of ambition!",
            team : TEAMS.SLYTHERIN
        },
        {
            thought : "Your pride might be your downfall",
            team : TEAMS.SLYTHERIN
        },
        {
            thought : "There is much patience in you",
            team : TEAMS.HUFFLEPUFF
        },
        {
            thought : "Your sense of loyalty is strong",
            team : TEAMS.HUFFLEPUFF
        },
        {
            thought : "You are the careful sort",
            team : TEAMS.RAVENCLAW
        },
        {
            thought : "You are Witted! Quick witted ? Or a Half Wit",
            team : TEAMS.RAVENCLAW
        }
    ]



    intialize(scene = null, animation = "none", ANIM_TIME = 1){
        let hat = document.getElementById("hat-main");
        let hatBackground = document.getElementById("hat-bg");
        let hatEyeLeft = document.getElementById("hat-eye-left")
        let hatEyeRight = document.getElementById("hat-eye-right")
        let hatMouth = document.getElementById("hat-mouth")

        hat.style.display="block";
        hatBackground.style.animation=`${ANIM_TIME}s initialize-hat forwards`;
        hatEyeLeft.style.animation=`${ANIM_TIME}s  initialize-hat-eyes forwards 1s`;
        hatEyeRight.style.animation=`${ANIM_TIME}s  initialize-hat-eyes forwards 1s`;
        hatMouth.style.animation=`${ANIM_TIME}s  initialize-hat-mouth forwards 1.5s`;

        if(scene != null && animation !="none"){
            scene.style.animation = animation;
        }
    } 
    
    float(ANIM_TIME) {
        let hat = document.getElementById("hat-main");
        hat.style.animation= `hat-floating ${ANIM_TIME}s ease-in-out infinite`
    }

    stopThinking(){
        document.getElementById('landing').style.animation = "2s disappear forwards";
        setTimeout(()=>this.displayBadgePage(),2000);
    }

    displayBadgePage(){
        let badgePage = document.getElementsByTagName('body')[0];
        badgePage.style.animation= "";
        badgePage.style.backgroundColor='';
        badgePage.style.animation = "3s appear forwards";
    }
    think(ANIM_TIME){
        let thoughts = document.getElementById("thoughts");
        let randomThought = this.getRandomThought();
        thoughts.innerText = Hat.THOUGHTS[randomThought].thought;
        CURRENT_TEAM = Hat.THOUGHTS[randomThought].team;
        thoughts.style.animation = `type ${ANIM_TIME}s`;
        setTimeout(()=> this.think(ANIM_TIME),ANIM_TIME*1000)
        
    }

     getRandomThought() {
        let min = 0;
        let max = Hat.THOUGHTS.length - 1;
        let index = Math.floor(Math.random() * (max - min + 1) + min); 
        return index;
      }
      

}
