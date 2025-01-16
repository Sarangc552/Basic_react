import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About_us = () => {
//use navigate hook
    const nav=useNavigate()
    const Contactus=()=>{
        nav("/contact")
    }
    const Register=()=>{
        nav("/register")
    }
    const login=()=>{
      nav("/login")
    }
  return (
    <div>
      <h1 style={{ textAlign: "center",fontWeight:"bold" }}>About Us</h1>
      <div style={{ display: "flex", margin: "20px 30px" }}>
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
            width={"600px"}
            height={"500px"}
          />
        </div>
        <div style={{ margin: "5px 15px" }}>
          <p style={{ fontSize: "17px", fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat id
            dicta distinctio nesciunt, aut quia impedit nihil recusandae
            deserunt porro ab explicabo quibusdam quasi itaque, modi enim odit,
            unde ad ut eligendi. Accusantium odit ex impedit quas accusamus, id
            nostrum officia maxime culpa quidem dignissimos nisi exercitationem
            nobis doloremque consectetur deleniti, ab nulla reprehenderit ipsa
            temporibus! Distinctio maiores temporibus consectetur perferendis
            error deserunt et officiis laboriosam ut, unde cupiditate vel?
            Quisquam natus voluptas atque reiciendis animi officia earum et! Ex
            iste corporis quo architecto similique facilis doloremque, expedita
            eum ut laborum quisquam explicabo perferendis, impedit eaque quas
            ipsa veritatis nulla pariatur! Fugiat itaque dignissimos, accusamus
            soluta quia neque. Mollitia itaque a reiciendis deleniti voluptates
            esse illo cum asperiores ut odit autem officia necessitatibus id
            minus, quibusdam optio! Beatae nesciunt incidunt inventore cumque
            corporis nulla a, quidem eligendi mollitia harum consectetur
            molestias est, fuga cum, commodi quibusdam repudiandae! Aut sunt
            consequuntur sequi maiores, magni dolorum numquam illo molestias
            excepturi modi laborum. Nesciunt itaque maxime, voluptas modi
            deleniti doloribus esse harum tenetur voluptatibus, a hic adipisci
            optio voluptatem nobis? Earum distinctio dolorum, ipsum inventore,
            cupiditate temporibus cumque aspernatur sunt labore corrupti quas ut
            placeat ab deserunt eaque. Consequuntur enim a necessitatibus iste
            id, blanditiis in recusandae ratione quas laboriosam illum, eum
            nostrum saepe optio quia sunt ullam quasi earum corrupti, voluptates
            doloremque! Error quod assumenda, quae delectus ipsum et itaque quia
            aut repellendus laborum perferendis sequi, nam eligendi quasi id
            dicta nihil maiores eos dolores iste ad labore ex consequatur?
            Alias, et.
          </p>
        </div>
      </div>
      <div className="text-center m-5">
        <Link to={"/service"}><button style={{color:"white",borderRadius:"20px",backgroundColor:"blue",padding:"10px",width:"150px",border:"0px",marginRight:"10px"}}>Service</button></Link>
        <button onClick={Contactus} style={{color:"white",borderRadius:"20px",backgroundColor:"blue",padding:"10px",width:"150px",border:"0px",marginRight:"10px"}}>Contact us</button>
        <button onClick={Register} style={{color:"white",borderRadius:"20px",backgroundColor:"blue",padding:"10px",width:"150px",border:"0px",marginRight:"10px"}}>Register</button>
        <button onClick={login} style={{color:"white",borderRadius:"20px",backgroundColor:"blue",padding:"10px",width:"150px",border:"0px",marginRight:"10px"}}>Login</button>
      </div>
    </div>
  );
};

export default About_us;
