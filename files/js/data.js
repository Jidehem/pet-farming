/* global Vue, _, Sortable */
Vue.directive('sortable', {
  inserted(el, binding) {
    const sortable = new Sortable(el, binding.value || {});
  },
});

const maxFrags = 330;
// Migrate data from version 2.1.1 to 2.1.1-K:
// _.each(data.petList, pet => delete pet.daysRemaining);
// data.version = '2.1.1-K';
// data.petUpgrades= [
//              { value: 0, desc: 'zero', stars: 0},
//              { value: 10, desc: 'one', stars: 1},
//              { value: 30, desc: 'two', stars: 2},
//              { value: 80, desc: 'three', stars: 3},
//              { value: 180, desc: 'four', stars: 4},
//              { value: maxFrags, desc: 'five', stars: 5}];
const originalData = {
  version: '2.1.1-K',
  petList: [
    { name: 'Hippong', fragments: 0, img: 94, farm: true, index: 40, defaultTier: 1 },
    { name: 'Tinkey', fragments: 10, img: 6, farm: true, index: 13, defaultTier: 2 },
    { name: 'Icy', fragments: 10, img: 17, farm: true, index: 16, defaultTier: 3 },
    { name: 'Cat Knight', fragments: 0, img: 136, farm: true, index: 47, defaultTier: 4 },
    { name: 'Boom', fragments: 10, img: 28, farm: true, index: 19, defaultTier: 5 },
    { name: 'Wakong', fragments: 0, img: 43, farm: true, index: 30, defaultTier: 6 },
    { name: 'Octopa', fragments: 0, img: 139, farm: true, index: 50, defaultTier: 7 },
    { name: 'Bamba', fragments: 0, img: 115, farm: true, index: 46, defaultTier: 8 },
    { name: 'Cerbero', fragments: 0, img: 138, farm: true, index: 49, defaultTier: 9 },
    { name: 'Seahorse', fragments: 0, img: 51, farm: true, index: 34, defaultTier: 10 },
    { name: 'Moon', fragments: 10, img: 19, farm: true, index: 18, defaultTier: 11 },
    { name: 'Sarah', fragments: 0, img: 55, farm: true, index: 35, defaultTier: 12 },
    { name: 'E-77', fragments: 0, img: 48, farm: true, index: 31, defaultTier: 13 },
    { name: 'Dark Snake', fragments: 0, img: 50, farm: true, index: 33, defaultTier: 14 },
    { name: 'Windy', fragments: 0, img: 49, farm: true, index: 32, defaultTier: 15 },
    { name: 'Athos', fragments: 0, img: 201, farm: true, index: 51, defaultTier: 16 },
    { name: 'Grizzle', fragments: 0, img: 202, farm: true, index: 52, defaultTier: 17 },
    { name: 'Raven', fragments: 0, img: 203, farm: true, index: 53, defaultTier: 18 },
    { name: 'Leyak', fragments: 0, img: 204, farm: true, index: 54, defaultTier: 19 },
    { name: 'Osma', fragments: 0, img: 95, farm: true, index: 41, defaultTier: 20 },
    { name: 'Saul', fragments: 0, img: 96, farm: true, index: 42, defaultTier: 21 },
    { name: 'Rena', fragments: 0, img: 93, farm: true, index: 39, defaultTier: 22 },
    { name: 'Bernard', fragments: 0, img: 112, farm: true, index: 43, defaultTier: 23 },
    { name: 'ChiChi', fragments: 0, img: 113, farm: true, index: 44, defaultTier: 24 },
    { name: 'Mori', fragments: 0, img: 137, farm: true, index: 48, defaultTier: 25 },
    { name: 'Mambo', fragments: 10, img: 1, farm: true, index: 0, defaultTier: 26 },
    { name: 'Totem', fragments: 10, img: 16, farm: true, index: 15, defaultTier: 27 },
    { name: 'Lamp', fragments: 10, img: 13, farm: true, index: 12, defaultTier: 28 },
    { name: 'Sleepy', fragments: 10, img: 15, farm: true, index: 14, defaultTier: 29 },
    { name: 'Jingger', fragments: 0, img: 38, farm: true, index: 25, defaultTier: 30 },
    { name: 'Oscar', fragments: 0, img: 56, farm: true, index: 36, defaultTier: 31 },
    { name: 'Nimbus', fragments: 0, img: 37, farm: true, index: 24, defaultTier: 32 },
    { name: 'Mir', fragments: 10, img: 36, farm: true, index: 23, defaultTier: 33 },
    { name: 'Squirrel', fragments: 10, img: 18, farm: true, index: 17, defaultTier: 34 },
    { name: 'Phoenic', fragments: 10, img: 9, farm: true, index: 8, defaultTier: 35 },
    { name: 'Devil', fragments: 10, img: 27, farm: true, index: 21, defaultTier: 36 },
    { name: 'Chesher', fragments: 0, img: 114, farm: true, index: 45, defaultTier: 37 },
    { name: 'Winky', fragments: 0, img: 40, farm: true, index: 27, defaultTier: 38 },
    { name: 'Cora', fragments: 0, img: 42, farm: true, index: 29, defaultTier: 39 },
    { name: 'Bunny', fragments: 0, img: 41, farm: true, index: 28, defaultTier: 40 },
    { name: 'Indy', fragments: 10, img: 10, farm: true, index: 9, defaultTier: 41 },
    { name: 'Snork', fragments: 10, img: 8, farm: true, index: 7, defaultTier: 42 },
    { name: 'Piggy', fragments: 10, img: 4, farm: true, index: 3, defaultTier: 43 },
    { name: 'Rapty', fragments: 0, img: 39, farm: true, index: 26, defaultTier: 44 },
    { name: 'Black', fragments: 0, img: 57, farm: true, index: 37, defaultTier: 45 },
    { name: 'Juda', fragments: 0, img: 58, farm: true, index: 38, defaultTier: 46 },
    { name: 'Joe', fragments: 10, img: 2, farm: false, index: 1, defaultTier: 47 },
    { name: 'Mummy', fragments: 10, img: 3, farm: false, index: 2, defaultTier: 48 },
    { name: 'Potang', fragments: 10, img: 5, farm: false, index: 4, defaultTier: 49 },
    { name: 'Uni', fragments: 10, img: 14, farm: false, index: 5, defaultTier: 50 },
    { name: 'Joker', fragments: 10, img: 7, farm: false, index: 6, defaultTier: 51 },
    { name: 'Grim', fragments: 10, img: 11, farm: false, index: 10, defaultTier: 52 },
    { name: 'Woola', fragments: 10, img: 12, farm: false, index: 11, defaultTier: 53 },
    { name: 'Leo', fragments: 10, img: 26, farm: false, index: 20, defaultTier: 54 },
    { name: 'Griffy', fragments: 10, img: 29, farm: false, index: 22, defaultTier: 55 },
  ],
  SHList: [],
  KL: 100,
  entries: 10,
  refills: 3,
  gemCostArray: [0, 100, 300, 700, 1500, 2700, 4300],
  farmList: [],
  petUpgrades: [
                { value: 0, desc: 'zero', stars: 0},
              { value: 10, desc: 'one', stars: 1},
              { value: 30, desc: 'two', stars: 2},
              { value: 80, desc: 'three', stars: 3},
              { value: 180, desc: 'four', stars: 4},
              { value: maxFrags, desc: 'five', stars: 5},
    ],
};

// Load saved data if it exists
const savedData = JSON.parse(localStorage.getItem('data')) || false;
let data;
if (savedData) {
  if (savedData.version === originalData.version) {
    data = _.cloneDeep(savedData);
  } else {
    // Do something if data versions are different
  }
} else {
  data = _.cloneDeep(originalData);
}

const orderedPetList = _.orderBy(data.petList, 'index');
for (let i = 0; i < orderedPetList.length * 2 + 10; i++) {
  data.SHList[i] = [{}, {}];
}

// Create SH pages
for (let i = 0; i < orderedPetList.length; i++) {
  data.SHList[i][0].img = orderedPetList[i].img;
  data.SHList[i][0].name = orderedPetList[i].name;
  data.SHList[i + orderedPetList.length][0].img = orderedPetList[i].img;
  data.SHList[i + orderedPetList.length][0].name = orderedPetList[i].name;
  if (i < 5) {
    data.SHList[i][1].img = orderedPetList[i].img;
    data.SHList[i][1].name = orderedPetList[i].name;
  } else {
    data.SHList[(i - 2) * 2][1].img = orderedPetList[i].img;
    data.SHList[(i - 2) * 2][1].name = orderedPetList[i].name;
  }
  data.SHList[i * 2 + 5][1].img = orderedPetList[i].img;
  data.SHList[i * 2 + 5][1].name = orderedPetList[i].name;
}

// Create SH page numbers
for (let i = 0, page = 1, pageIndex = 1; i < data.SHList.length; i++) {
  data.SHList[i][0].KLReq = `${i * 2 + 2}`;
  data.SHList[i][0].stage = `${page}-${pageIndex}`;
  pageIndex += 4;
  data.SHList[i][1].stage = `${page}-${pageIndex}`;
  pageIndex++;
  if (pageIndex > 20) {
    pageIndex = 1;
    page++;
  }
}

// Trim off excess stages
data.SHList.length = data.petList.length * 2 - 4;

const vm = new Vue({
  el: '#app',
  data,
  created() {
    this.updateFarmList();
  },
  watch: {
    petList: {
      handler(val) {
        this.updateFarmList();
      },
    },
    KL() {
      this.updateFarmList();
    },
    entries() {
      this.updateFarmList();
    },
    refills() {
      this.updateFarmList();
    },
  },
  computed: {
    orderedPetList() {
      return _.orderBy(this.petList, 'index');
    },
    petUpgradesInvertedNoZero(){
      return _.reverse(_.drop(this.petUpgrades));
   },
   petByName(){
     return _.keyBy(this.petList, v => v.name);
   }
  },
  methods: {
    getPet(petName) {
      return this.petByName[petName];
    },
    isUpgradeDone(pet, petUpgrade) {
      return pet.fragments >= petUpgrade.value &&
        (petUpgrade.stars +1 >= this.petUpgrades.length || pet.fragments < this.petUpgrades[petUpgrade.stars + 1].value);
    },
    reorderPetList({ oldIndex, newIndex }) {
      const movedItem = this.petList.splice(oldIndex, 1)[0];
      this.petList.splice(newIndex, 0, movedItem);
    },
    resetTierList() {
      this.petList = _.orderBy(this.petList, 'defaultTier');
    },
    addFarmedFrags() {
      for (const pet of this.petList) {
        pet.fragments += pet.farmableFrags;
      }
      this.updateFarmList();
    },
    updateFarmList() {
      // Reset farmableFrags to zero on all pets
      _.forEach(this.petList, obj => obj.farmableFrags = 0);
      

      // Save data
      localStorage.setItem('data', JSON.stringify(this.$data));

      this.farmList = _.filter(this.petList, pet => pet.fragments < maxFrags && pet.farm);
      let tickets = this.entries + this.refills * 5;
   
      const availableFragsByPetName = {};
      for (const pet of this.farmList) {
        // poor algorithm complexity O(n^2), but performance is ok in practice
        const availableFrags = _.filter(this.SHList, obj => obj[0].KLReq <= this.KL && (obj[0].name === pet.name || obj[1].name === pet.name));
        let farmableFrags = 0;
        if (availableFrags !== []) {
          let firstStageFrags = 3;
          if (pet.index >= this.petList.length - 4) {
            // Newest pets only have 1 frag on first stage
            firstStageFrags = 1;
          }
          // warning: algo is sensitive to first frags pbeing present in left or right stage
          for (let i = 0; i < availableFrags.length; i++) {
            if (availableFrags[i][0].name === pet.name) {
              farmableFrags += firstStageFrags;
              // Only the first first stage can have 3 frags
              if (firstStageFrags === 3) {
                firstStageFrags = 1;
              }
            }
            if (availableFrags[i][1].name === pet.name) {
              farmableFrags += 3;
            }
          }
        }
        availableFragsByPetName[pet.name] = farmableFrags;
              
        // current state
        if (tickets > 0) {
            // If we're farming more frags than needed to finish the pet, remove the excess, or more than we have remaining tickets, remove excess
            pet.farmableFrags = Math.min(maxFrags - pet.fragments, farmableFrags, tickets);
            tickets -= farmableFrags;
        }
      }
      this.farmList = _.filter(this.farmList, obj => obj.farmableFrags > 0);
                   
        // update planning
        this.updatePlanning(availableFragsByPetName);
    },

                   getStartDay(petName) {
                   return _.findIndex(this.planning, dayPlanning => _.has(dayPlanning.nbFragsUsedByPetName, petName));
                   },
                   getLastDay(petName) {
                   return _.findLastIndex(this.planning, dayPlanning => _.has(dayPlanning.nbFragsUsedByPetName, petName));
                   },
                   getNbRemainingDays(petName) {
                   return this.getLastDay(petName)-this.getStartDay(petName)+1;
                   },
   isWithAllStagesAvailable() {
     return this.KL >= this.SHList[this.SHList.length-1][0].KLReq;
   },
    getNextPetTodoIndex(startIdx, remainingFragsByPetName) {
      return _.findIndex(this.petList, pet => pet.fragments < maxFrags && pet.farm && remainingFragsByPetName[pet.name] > 0, startIdx);
    },
    updatePlanning(availableFragsByPetName) {
       const remainingFragsByPetName = _.transform(_.filter(this.petList, pet => pet.fragments < maxFrags && pet.farm),
                                                    (res, pet) => {
                                                        res[pet.name] = maxFrags - pet.fragments;
                                                    return true;
                                                    },
                                                    {});
       
       // array of (nbFragsUsed, map of nbFrags per pet name)
       this.planning = [];
       let dayIndex = 0;
       let nbPetsDone = 0;
       let nextPetNotDoneIndex = 0;
       
       const nbDailyTickets = this.entries + this.refills * 5;
       
       // for each day
       while (nextPetNotDoneIndex !== -1) {
           let nbRemainingTickets = nbDailyTickets;
           let nextPetTodoIndex = nextPetNotDoneIndex;
           const dayPlanning = {
             nbFragsUsed: 0,
             nbFragsUsedByPetName: {}
           };
           while (nbRemainingTickets > 0) {
               nextPetTodoIndex = this.getNextPetTodoIndex(nextPetTodoIndex, remainingFragsByPetName);
               if (nextPetTodoIndex === -1) {
                   break;
               }
               const pet = this.petList[nextPetTodoIndex];
               const remainingFrags = remainingFragsByPetName[pet.name];
               const availableFrags = availableFragsByPetName[pet.name];
               const farmableFrags = Math.min(remainingFrags, availableFrags, nbRemainingTickets);
               nbRemainingTickets -= farmableFrags;
               remainingFragsByPetName[pet.name] -= farmableFrags;
               dayPlanning.nbFragsUsed += farmableFrags;
               dayPlanning.nbFragsUsedByPetName[pet.name] = _.defaultTo(dayPlanning.nbFragsUsedByPetName[pet.name], 0) + farmableFrags;
               if (remainingFrags === farmableFrags && nextPetTodoIndex === nextPetNotDoneIndex) {
                 nextPetNotDoneIndex++;
               }
               nextPetTodoIndex++;
           }
           // all daily tickets have been used
           // skip pets done
           nextPetNotDoneIndex = this.getNextPetTodoIndex(nextPetNotDoneIndex, remainingFragsByPetName);
           this.planning.push(dayPlanning);
       }
       // all pet fragments have been planned
    },
    getPetInputClassPrefix(petFrags) {
        const pu = this.petUpgrades;
        let classPrefix = ''
        for(let i = 0, last = 0; i < pu.length; ++i) {
            classPrefix = pu[i].desc;
            if (pu[i].value >= petFrags)
            return classPrefix;
        }
        return classPrefix;
    },
    
    // we can't put the state in "data" because we don't wan't to duplicate it in local storage => work directly with html, don't use Vue
    restoreState() {
        const rawData = document.getElementById('rawState').value;
        localStorage.setItem('data', rawData);
        _.assign(this.$data, JSON.parse(rawData));
    },

    dumpState() {
        const state = JSON.stringify(this.$data);
        document.getElementById('rawState').value = state;
    },
                   
    clearState() {
        document.getElementById('rawState').value = '';
    }
  },
});
