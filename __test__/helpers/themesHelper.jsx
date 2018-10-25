// Define themes specifics
export const Themes = {
    defaultTheme : {
        tombstone: {
            src: "assets/tombstone.svg", 
            alt: "Tombstone"
        },
        guillotine:{
            src: "assets/guillotine.svg", 
            alt: "Guillotine"
        },      
    },
    halloweenTheme : {
        tombstone: {
            src: "assets/halloween/ghost.svg", 
            alt: "Ghost"
        },
        guillotine:{
            src: "assets/halloween/zombie-hand.svg", 
            alt: "Zombie Hand"
        },  
    }
}

// Define themes periods and which theme to be used during specified period of time
// JS Date forma (yyyy,MM-1,dd) - month is an index, so January is 0
const themesPeriods = [{
    from: new Date(2018,9,21),
    to: new Date(2018,9,31),
    theme: Themes.halloweenTheme
}];

export const getCurrentTheme = () => {
    const now = new Date();
    var currentTheme = Themes.defaultTheme;

    themesPeriods.forEach( themeItem => {
        if ( now >= themeItem.from && now < themeItem.to ){
            currentTheme = themeItem.theme;
        };
    });

    return currentTheme;
};