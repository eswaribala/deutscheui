import React from 'react';
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
//React Hook
//arrow function
const Login = () => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    function login() {
        console.log('No errors, submit callback called!');
    }

    return (
        <form onSubmit={handleSubmit} noValidate style={{ backgroundColor: '#F0F0F0' }} className="border border-primary shadow-none p-3 mb-5 bg-light rounded w-275" >
            <fieldset>
                <legend>User Login</legend>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="email"
                            label="Email"
                            margin="normal"
                            fullWidth
                            name="email"
                            className={`input ${errors.email && 'is-danger'}`}
                            onChange={handleChange} value={values.email || ''} required
                        />
                        {errors.email && (
                            <p className="help is-danger">{errors.email}</p>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="password"
                            label="Password"
                            margin="normal"
                            fullWidth
                            className={`input ${errors.password && 'is-danger'}`}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password || ''} required
                        />
                        {errors.password && (
                            <p className="help is-danger">{errors.password}</p>
                        )}
                    </Grid>
                </Grid>
                <div className="d-flex justify-content-center mt-5">
                    <Fab color="primary" aria-label="add"  type="submit" style={{marginRight:50}} >
                        <LockOpenIcon />
                    </Fab>

                    <Fab color="secondary" aria-label="add"  type="reset" >
                        <LockIcon />
                    </Fab>
                </div>
            </fieldset>


        </form>

    );
};

export default Login;
