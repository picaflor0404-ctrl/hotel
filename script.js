*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, sans-serif;
}

body{
background:#f4f4f4;
}

header{
background:#111;
color:white;
padding:20px;
display:flex;
justify-content:space-between;
align-items:center;
}

.logo{
font-size:24px;
font-weight:bold;
}

nav ul{
list-style:none;
display:flex;
gap:20px;
}

nav a{
color:white;
text-decoration:none;
}

.hero{
height:90vh;
background:linear-gradient(
rgba(0,0,0,.5),
rgba(0,0,0,.5)
),
url('https://images.unsplash.com/photo-1566073771259-6a8506099945');
background-size:cover;
background-position:center;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
color:white;
}

.hero h1{
font-size:60px;
margin-bottom:20px;
}

.hero p{
font-size:20px;
margin-bottom:20px;
}

.btn{
background:gold;
padding:15px 30px;
color:black;
text-decoration:none;
font-weight:bold;
border-radius:8px;
}

.info{
padding:60px;
text-align:center;
background:white;
}

.destacados{
padding:60px;
}

.cards{
display:flex;
gap:20px;
justify-content:center;
flex-wrap:wrap;
}

.card{
background:white;
padding:25px;
width:300px;
border-radius:10px;
box-shadow:0 0 10px rgba(0,0,0,.1);
}

footer{
background:#111;
color:white;
text-align:center;
padding:20px;
}
.estadisticas{
display:flex;
justify-content:center;
gap:80px;
padding:50px;
background:white;
text-align:center;
}

.dato h2{
font-size:40px;
color:#d4af37;
}
.card{
transition:0.3s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 10px 20px rgba(0,0,0,.2);
}

.card h2{
font-size:50px;
margin-bottom:15px;
}
.formulario-reserva{
display:flex;
justify-content:center;
padding:60px;
}

.formulario-reserva form{
background:white;
padding:40px;
width:600px;
border-radius:15px;
box-shadow:0 0 15px rgba(0,0,0,.1);
}

.formulario-reserva input,
.formulario-reserva select,
.formulario-reserva textarea{
width:100%;
padding:12px;
margin-bottom:15px;
border:1px solid #ccc;
border-radius:8px;
}

.formulario-reserva button{
width:100%;
padding:15px;
background:#d4af37;
border:none;
font-size:18px;
font-weight:bold;
cursor:pointer;
border-radius:8px;
}

.formulario-reserva button:hover{
background:#c29d2f;
}
.card img{
width:100%;
height:220px;
object-fit:cover;
border-radius:10px;
margin-bottom:15px;
}

.card h4{
margin:15px 0;
color:#d4af37;
}
.contacto-container{
display:flex;
justify-content:center;
gap:40px;
padding:60px;
flex-wrap:wrap;
}

.contacto-info,
.contacto-form{

background:white;
padding:30px;
border-radius:15px;
box-shadow:0 0 15px rgba(0,0,0,.1);

width:450px;
}

.contacto-info h2,
.contacto-form h2{
margin-bottom:20px;
}

.contacto-info p{
margin-bottom:15px;
}

.contacto-form input,
.contacto-form textarea{

width:100%;
padding:12px;
margin-bottom:15px;

border:1px solid #ccc;
border-radius:8px;
}

.contacto-form button{

width:100%;

padding:15px;

background:#d4af37;
border:none;

font-size:18px;
font-weight:bold;

cursor:pointer;

border-radius:8px;
}
.galeria{
padding:60px;
text-align:center;
background:white;
}

.galeria-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
margin-top:30px;
}

.galeria-grid img{
width:100%;
height:250px;
object-fit:cover;
border-radius:10px;
}
@media(max-width:768px){

header{
flex-direction:column;
}

nav ul{
flex-direction:column;
text-align:center;
margin-top:15px;
}

.hero h1{
font-size:35px;
}

.estadisticas{
flex-direction:column;
gap:20px;
}

.cards{
flex-direction:column;
align-items:center;
}

.contacto-container{
flex-direction:column;
align-items:center;
}

}