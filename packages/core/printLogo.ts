export default function () {
    if (PROD) {
        const logo = `
_______________________________________________________________________________________
  
  __                             .___            .__                    /\       .__ 
_/  |_  ____ ___.__.           __| _/____   _____|__| ____   ____      / /  __ __|__|
\   __\/  _ <   |  |  ______  / __ |/ __ \ /  ___/  |/ ___\ /    \    / /  |  |  \  |
 |  | (  <_> )___  | /_____/ / /_/ \  ___/ \___ \|  / /_/  >   |  \  / /   |  |  /  |
 |__|  \____// ____|         \____ |\___  >____  >__\___  /|___|  / / /    |____/|__|
             \/                   \/    \/     \/  /_____/      \/  \/               
                      
_______________________________________________________________________________________
                                 author:albus357
  `;

        const rainbowGradient = `
  background: linear-gradient(135deg, orange 60%, cyan);
  background-clip: text; 
  color: transparent;
  font-size: 16px; 
  line-height: 1;
  font-family: monospace;
  font-weight: 600;
  `;

        console.info(`%c${logo}`, rainbowGradient);
    } else if (DEV) {
        console.log("[toy-design-ui]:dev mode...");
    }
}