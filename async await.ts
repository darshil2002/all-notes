<<<<<<< HEAD
ngOnInit(){

    // async keyword badh function ne ek promise banai de and
    // then and catch banne na ans api sake without making 
    // a saprate prom

    async function darshil() {
      return 'darsh'
    }

    darshil().then((res) => {
      console.log('then data...', res);
    })

    // async await together 

    let myPromise=new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('data recived')
      }, 3000); 
    })
    async function getData(){
      let response =await myPromise;
      console.log(response)
      console.log('not waiting now')
    }
    getData();
=======
