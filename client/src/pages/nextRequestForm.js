import React, { Component } from "react";
import { Button, Col, Form,ButtonToolbar } from "react-bootstrap";
import axios from "axios";

class nextRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userID:  window.location.pathname.split("/")[4],
      semester :window.location.pathname.split("/")[5],
      major: window.location.pathname.split("/")[6],
      course:""
    
    };
  }

  handleCourseChange(e) {
    this.setState({ course: e.target.value });
  }

  async handleSubmit(event) {
    const info = {
      course: this.state.course
    };
      await axios
        .put("/api/student/request", info)
        .then(response => {
            axios
              .get("/api/user/auth", {
                headers: { Authorization: response.data }
              })
              .then(response => {
                this.setState({
                  userID: response.data.authorizedData.id
                });
              })
              .catch(error => {
                console.log(error);
              });

          alert(
            "Congratulations! Your request has been created successfully. Happy learning!"
          );
          event.preventDefault();
          window.location = `/offers/${this.state.userID}/${this.state.course}`;
        })
        .catch(function(error) {
          alert("An error occured, please try again.");
        });
  }

  render() {
    if(this.state.semester.localeCompare("Semester%201")===0)
    return (
      <div>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: darkturquoise;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
        </style>
        <br />
        <h1>Find your course</h1>
        <br />

        <Form>
        <Form.Group as={Col} controlId="formGridCourse">
          <Form.Label>Course</Form.Label>
          <Form.Control
            as="select"
            value={this.state.course}
            onChange={e => this.handleCourseChange(e)}
          > 
          <option value="">Course name</option> 
            <option value="CSEN102">CSEN102</option>
            <option value="CHEM102">CHEM102</option>
            <option value="PHYS101">PHYS101</option>
            <option value="HUMA101">HUMA101</option>
            <option value="HUMA102">HUMA102</option>
            <option value="MATH103">MATH103</option>
    
          </Form.Control>
        </Form.Group>
          <br />
        <ButtonToolbar>
          <Button variant="flat" size="xxl" block
           onClick={event => this.handleSubmit(event)}>
            Submit
          </Button >
        </ButtonToolbar>
      <br />
        </Form>
       </div>
    );
    else if(this.state.semester.localeCompare("Semester%203")===0)
    return (
        <div>
          <style type="text/css">
            {`
      .btn-flat {
        background-color: darkturquoise;
        color: white;
      }
  
      .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
      }
      `}
          </style>
          <br />
          <h1>Find your course</h1>
          <br />
  
          <Form>
          <Form.Group as={Col} controlId="formGridCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control
              as="select"
              value={this.state.course}
              onChange={e => this.handleCourseChange(e)}
            >
              <option value="">Course name</option>    
              <option value="MATH301">MATH301</option>
              <option value="ELCT301">ELCT301</option>
              <option value="CSEN301">CSEN301</option>
              <option value="PHYSp301">PHYSp301</option>
              <option value="PHYSt301">PHYSt301</option>
              <option value="HUMA301">HUMA301</option>
              <option value="HUMA202">HUMA202</option>
              <option value="ENGD301">ENGD301</option>
      
            </Form.Control>
          </Form.Group>
            <br />
          <ButtonToolbar>
            <Button variant="flat" size="xxl" block
            onClick={event => this.handleSubmit(event)}>
              Submit
            </Button>
          </ButtonToolbar>
        <br />
          </Form>
         </div>
      );
      else if(this.state.semester.localeCompare("Semester%204")===0)
      return (
          <div>
            <style type="text/css">
              {`
        .btn-flat {
          background-color: darkturquoise;
          color: white;
        }
    
        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
            </style>
            <br />
            <h1>Find your course</h1>
            <br />
    
            <Form>
            <Form.Group as={Col} controlId="formGridCourse">
              <Form.Label>Course</Form.Label>
              <Form.Control
                as="select"
                value={this.state.course}
                onChange={e => this.handleCourseChange(e)}
              >
                <option value="">Course name</option>    
                <option value="MATH401">MATH401</option>
                <option value="CSIS402">CSIS402</option>
                <option value="CSEN401">CSEN401</option>
                <option value="CSEN403">CSEN403</option>
                <option value="ELCT401">ELCT401</option>
                <option value="COMM401">COMM401</option>
                <option value="HUMA401">HUMA401</option>
                <option value="HUMA302">HUMA302</option>
        
              </Form.Control>
            </Form.Group>
              <br />
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block
              onClick={event => this.handleSubmit(event)}>
                Submit
              </Button>
            </ButtonToolbar>
          <br />
            </Form>
           </div>
        );
        else if(this.state.semester.localeCompare("Semester%202")===0)
        return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                  <option value="">Course name</option>    
                  <option value="MATH203">MATH203</option>
                  <option value="PHYS202">PHYS202</option>
                  <option value="CSEN202">CSEN202</option>
                  <option value="ELCT201">ELCT201</option>
                  <option value="EDPT201">EDPT201</option>
                  <option value="HUMA201">HUMA201</option>
                  <option value="HUMA103">HUMA103</option>
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          );
          if(this.state.semester.localeCompare("Semester%205")===0 && this.state.major.localeCompare("CSEN")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >

                  <option value="">Course name</option>    
                  <option value="CSEN501">CSEN501</option>
                  <option value="CSEN503">CSEN503</option>
                  <option value="CSEN502">CSEN502</option>
                  <option value="HUMA101">HUMA402</option>
                  <option value="MATH502">MATH502</option>
                  <option value="DMET501">DMET501</option>
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          ); if(this.state.semester.localeCompare("Semester%205")===0 && this.state.major.localeCompare("DMET")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                <option value="">Course name</option>  
                 <option value="CSEN501">CSEN501</option>
                  <option value="CSEN503">CSEN503</option>
                  <option value="DMET501">DMET501</option>
                  <option value="HUMA101">HUMA402</option>
                  <option value="MATH502">MATH502</option>
                  <option value="DMET502">DMET502</option>
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          ); if(this.state.semester.localeCompare("Semester%205")===0 && this.state.major.localeCompare("CSEN")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                  <option value="">Course name</option>  
                  <option value="CSEN501">CSEN501</option>
                  <option value="CSEN503">CSEN503</option>
                  <option value="CSEN502">CSEN502</option>
                  <option value="HUMA101">HUMA402</option>
                  <option value="MATH502">MATH502</option>
                  <option value="DMET501">DMET501</option>
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          ); if(this.state.semester.localeCompare("Semester%206")===0 && this.state.major.localeCompare("CSEN")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                 <option value="">Course name</option>  
                 <option value="CSEN601">CSEN601</option>
                 <option value="CSEN602">CSEN602</option>
                 <option value="CSEN603">CSEN603</option>
                 <option value="CSEN604">CSEN604</option>
                  <option value="CSEN605">CSEN605</option>
                  <option value="DMET602">DMET602</option>
                  <option value="MNGT601">MNGT601</option>
                  
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          );
          if(this.state.semester.localeCompare("Semester%206")===0 && this.state.major.localeCompare("DMET")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                  <option value="">Course name</option>  
                  <option value="CSEN601">CSEN601</option>
                 <option value="CSEN602">CSEN602</option>
                  <option value="CSEN605">CSEN605</option>
                  <option value="DMET601">DMET601</option>
                  <option value="DMET602">DMET602</option>
                  <option value="MNGT601">MNGT601</option>
                  <option value="COMM602">COMM602</option>

                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          ); if(this.state.semester.localeCompare("Semester%207")===0 && this.state.major.localeCompare("CSEN")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                 <option value="">Course name</option>  
                 <option value="CSEN701">CSEN701</option>
                 <option value="CSEN702">CSEN702</option>
                 <option value="CSEN703">CSEN703</option>
                 <option value="CSEN704">CSEN704</option>
                <option value="DMET502">DMET502</option>
                  
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          );
          if(this.state.semester.localeCompare("Semester%207")===0 && this.state.major.localeCompare("DMET")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                 <option value="">Course name</option>  
                 <option value="CSEN701">CSEN701</option>
                 <option value="DMET702">DMET702</option>
                 <option value="CSEN703">CSEN703</option>
                 <option value="DMET704">DMET704</option>
                <option value="DMET703">DMET703</option>                  
                <option value="DMET706">DMET706</option>
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          );
          if(this.state.semester.localeCompare("Semester%209")===0 && this.state.major.localeCompare("CSEN")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                 <option value="">Course name</option>  
                 <option value="DMET901">DMET901</option>
                 <option value="CSEN901">CSEN901</option>
                 <option value="CSEN903">CSEN903</option>
               
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          );
          if(this.state.semester.localeCompare("Semester%209")===0 && this.state.major.localeCompare("DMET")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                 <option value="">Course name</option>  
                 <option value="DMET902">DMET902</option>
                 <option value="DMET904">DMET904</option>
                <option value="DMET901">DMET901</option>                  
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          );
          if(this.state.semester.localeCompare("Semester%2010")===0 && this.state.major.localeCompare("CSEN")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >

                <option value="">Course name</option>  
                <option value="CSEN1001">CSEN1001</option>
                 <option value="CSEN1002">CSEN1002</option>
                <option value="CSEN1003">CSEN1003</option>                  
                <option value="HUMA1001">HUMA1001</option>                  
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          );
          if(this.state.semester.localeCompare("Semester%2010")===0 && this.state.major.localeCompare("DMET")===0)
          return (
            <div>
              <style type="text/css">
                {`
          .btn-flat {
            background-color: darkturquoise;
            color: white;
          }
      
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
              </style>
              <br />
              <h1>Find your course</h1>
              <br />
      
              <Form>
              <Form.Group as={Col} controlId="formGridCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.course}
                  onChange={e => this.handleCourseChange(e)}
                >
                <option value="">Course name</option>  
                <option value="DMET1001">DMET1001</option>
                 <option value="DMET1002">DMET1002</option>
                <option value="DMET1003">DMET1003</option>                  
                <option value="HUMA1001">HUMA1001</option>                   
          
                </Form.Control>
              </Form.Group>
                <br />
              <ButtonToolbar>
                <Button variant="flat" size="xxl" block
                onClick={event => this.handleSubmit(event)}>
                  Submit
                </Button>
              </ButtonToolbar>
            <br />
              </Form>
             </div>
          );
          
          
          
  }
}

export default nextRequestForm;