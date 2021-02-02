var vm = new Vue({
	el: "#inicio",
	data: {
		funcionarios: [],
		ativo: false,
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
		id: ""	,
		obrigatorio: false,
	},

	methods: {
		async findFuncionarios(){
			const response = await fetch('http://localhost:8080/funcionarios')
			const json = await response.json();
			this.funcionarios = json;
		},

		async deletarFuncionario(event){
			const id = event.currentTarget.value;
			console.log(id)
			const deleted = await axios.delete(`http://localhost:8080/funcionarios/${id}`);
			window.location.href ='/'

		},

		async atualizarFuncionario(event){
			const response = await axios.put(`http://localhost:8080/funcionarios/${this.id}`, this.requestBody);
				window.location.href ='/'
		},
		atualizar(event){
			const id = event.currentTarget.value;
			this.id = id;
			this.ativo = true;
		}
	},

	created(){
		this.findFuncionarios();
	},
});
	