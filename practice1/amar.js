// Amar is a singer, lives in Goa.

// Akbar is a chef, lives in Mumbai.

// Anthony is a Magician, lives in Kashmir.

// All three of them are best friends but because of work cannot meet. All of them wants to borrow each other's 
// skills for a while so that they can impress people.

// We want to make sure they can borrow each other's skill.





const Amar={
    name:'Amar',
    skill:'singer',
    lives:'Goa',

    changeSkill(order){
        console.log(`Amar Borrowed his ${this.skill} ${order} from ${this.name}`);
    },
}
const Akbar={
    name:'Akbar',
    skill:'chef',
    lives:'Mumbai',

    changeSkill(order){
        console.log(`Akbar Borrowed his ${this.skill} ${order} from ${this.name}`);
    },
}
const Anthony={
    name:'Anthony',
    skill:'Magician',
    lives:'Kashmir',

    changeSkill(order){
        console.log(`Anthony Borrowed his ${this.skill} ${order} from ${this.name}`);
    },
}
Amar.changeSkill.call(Akbar,'skill');
Akbar.changeSkill.apply(Amar,['skill'])
let x=Anthony.changeSkill.bind(Akbar,'skill')
x();