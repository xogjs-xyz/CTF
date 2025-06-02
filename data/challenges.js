const challenges = [
  {
    category: 'VSEC Garage: UDS Challenge',
    problems: [
      {
        id: 'unlock',
        title: 'Unlock my door',
        points: 10,
        description: `Download ICSim from https://github.com/zombieCraig/ICSim and set it up using seed value -s 10000 for both ./controls and ./icsim.\nThen, find the arbitration id for door unlocks.`,
      },
      {
        id: 'speedometer',
        title: 'Speedometer ArbId',
        points: 50,
        description: `Please download https://github.com/zombieCraig/ICSim and read the instructions to compile/run.\nOnce setup, set the seed value -s 10000 for both ./controls and ./icsim.\nWhat is the arbitration id for the speedometer display?\n\nNOTE: Submit in the format 0xARBID`,
      },
      {
        id: 'simulation-vin',
        title: 'Simulation VIN',
        points: 40,
        description: `This challenge is within the Harborbay vehicle simulator on VSEC (https://vsec.blockharbor.io/). From the home page, enter HarborBay. Select the Mach-E UDS Challenge Simulation, then launch the terminal.\n\nRetrieve the VIN of the simulation using UDS.`,
      }
    ],
  },
];

export default challenges;