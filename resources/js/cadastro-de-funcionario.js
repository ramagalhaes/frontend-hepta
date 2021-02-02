var vm = new Vue({
	el: "#app",
	data: {
		requestBody: {
			nome: "",
			setor: {
                id: null,
				nome: "",
			},
			email: "",
			idade: "",
			salario: "",
        },
        
        setores: [],
	},

	methods: {

		async addFuncionario(event){
			const response = await axios.post(`http://localhost:8080/funcionarios`, this.requestBody);
			window.location.href ='/'

        },       
    },
    
});