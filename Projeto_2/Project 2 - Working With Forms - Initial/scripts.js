const members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
];

const handlingForms = {
    data() {
        return {
            members: members,
            newMember: { fname: '', lname: '', instrument: '' }
        };
    },
    methods: {
        addMember() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                this.members.push({ ...this.newMember });
                this.newMember = { fname: '', lname: '', instrument: '' };
            }
        }
    },
};


Vue.createApp(handlingForms).mount('#app');
