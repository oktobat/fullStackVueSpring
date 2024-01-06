<template lang="">
    <section>
		
		<div id="section_wrap">
		
			<div class="word">
			
				<h3>REGISTER HOPE BOOK FORM</h3>
				
			</div>
		
			<div class="register_hope_book_form">
			
				<form name="register_hope_book_form" method="post">
					<input type="hidden" name="u_m_no" v-bind:value="u_m_no"> <br>
                    <input type="text" name="hb_name" v-model="hb_name" placeholder="도서명"> <br>
					<input type="text" name="hb_author" v-model="hb_author" placeholder="저자"> <br>
					<input type="text" name="hb_publisher" v-model="hb_publisher" placeholder="출판사"> <br>
					<input type="text" name="hb_publish_year" v-model="hb_publish_year" placeholder="연도"> <br>
					<input type="hidden" name="hb_result" v-bind:value="hb_result"> <br>
					<input type="button" value="등록" @click="registerHopeBookForm();"> 
					<input type="reset" value="취소">
					
				</form>
				
			</div>
		
		</div>
		
	</section>
</template>
<script>
import axios from 'axios';
export default {
    name:"HopeBookForm",
    data(){
        return {
            u_m_no : 1,
            hb_name : "",
            hb_author : "",
            hb_publisher : "",
            hb_publish_year : "",
            hb_result : 0
        }
    },
    methods : {
        registerHopeBookForm(){

            const formData = {
                u_m_no: this.u_m_no,
                hb_name: this.hb_name,
                hb_author: this.hb_author,
                hb_publisher: this.hb_publisher,
                hb_publish_year: this.hb_publish_year,
                hb_result: this.hb_result
            };

            console.log(formData);

            if (this.hb_name == '') {
                alert('INPUT BOOK NAME.');
            } else if (this.hb_author == '') {
                alert('INPUT BOOK AUTHOR.');
            } else if (this.hb_publisher == '') {
                alert('INPUT BOOK PUBLISHER.');
            } else if (this.hb_publish_year == '') {
                alert('INPUT BOOK PUBLISH YEAR.');
            } else {
                axios.post('http://localhost:8090/api/registerHopeBookConfirm', formData, {
                headers : { 'Content-Type': 'application/json' }
                })
                .then((response)=>{
                    this.hb_name="";
                    this.hb_author="";
                    this.hb_publisher="";
                    this.hb_publish_year="";
                    this.$router.push("/getHopeBooks")
                })
                .catch((error)=>{
                    console.log('Error fetching data:', error);
                })
            }

            

        }
    }
}
</script>
<style scoped>
    section {
	margin: 30px 0;
	}

#section_wrap {
	max-width: 1200px;
	margin: 0 auto;
	}

#section_wrap .word {
	text-align: center;
	}
	
#section_wrap .register_hope_book_form {
	text-align: center;
	}

#section_wrap .register_hope_book_form input {
	width: 300px;
    padding:10px;
	margin: 3px;
	}

#section_wrap .register_hope_book_form select {
	width: 322px;
	margin: 3px;
	}

#section_wrap .register_hope_book_form input[type='button'],
#section_wrap .register_hope_book_form input[type='reset'] {
	width: 156px;
	}
</style>