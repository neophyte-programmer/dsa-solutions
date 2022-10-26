//  https://edabit.com/challenge/tYHkTdFrEmWfxpPKF - question

function matchHouses(step: number): number {  
    return step <= 0 ? 0 : (6 * step) - (step - 1)
    
}