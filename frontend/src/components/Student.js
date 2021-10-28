import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button, Paper } from "@mui/material";
import axios from "axios";

export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [students, setStudents] = useState([]);
  //POST ADD
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const student = { name, address };
    const options = {
      url: "http://localhost:8080/student",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json;charset=UTF-8",
      },
      data: student,
    };
    if (
      Boolean(options.data.name) === false ||
      Boolean(options.data.address) === false
    ) {
      alert("필드를 채워주세요");
      return;
    }
    axios(options)
      .then((response) => {
        console.log(response.status);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //GET ALL
  const getAllHandler = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //DELETE
  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(deleteId);
    axios
      .delete("http://localhost:8080/student/" + deleteId)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Container>
        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          fullWidth
          required="true"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={name === "" ? true : false}
        />
        <TextField
          id="outlined-basic"
          label="Student Address"
          variant="outlined"
          fullWidth
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          error={address === "" ? true : false}
        />
        <Button variant="outlined" color="secondary" onClick={submitHandler}>
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={getAllHandler}>
          회원 모두 조회하기
        </Button>
      </Container>
      <Container>
        <TextField
          id="outlined-basic"
          label="삭제할 회원의 ID"
          variant="outlined"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
        ></TextField>
        <Button
          variant="outlined"
          color="primary"
          onClick={deleteHandler}
          value={deleteId}
        >
          삭제하기
        </Button>
      </Container>
    </Box>
  );
}
