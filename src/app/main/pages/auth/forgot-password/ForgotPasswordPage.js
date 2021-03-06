import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Particles from 'react-particles-js';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken("#1e1f1c", 0.5)} 0%, #1e1f1c 80%)`,
		color: theme.palette.secondary.contrastText,
		'& .MuiInputBase-input': {
			color: 'white',
		},
	},
	label: {
		color: "white", letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
	}
}));

function Box(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef()

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active] = useState(false)

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
			onPointerOver={e => setHover(false)}
			onPointerOut={e => setHover(false)}>
			<boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
			<meshStandardMaterial attach="material" color={hovered ? '#F92672' : '#A6E22E'} />
		</mesh>
	)
}

function ForgotPasswordPage() {
	const classes = useStyles();
	const { form, handleChange, resetForm } = useForm({
		email: ''
	});

	function isFormValid() {
		return form.email.length > 0;
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		resetForm();
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<Particles
				style={{
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					position: "absolute",
				}}
				params={{
					"particles": {
						"number": {
							"value": 60
						},
						"size": {
							"value": 1
						},
						"move": {
							"direction": "right",
							"out_mode": "out",
							"speed": 1
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": false,
							}
						}
					},
				}}
			/>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384" style={{backgroundColor: "#333333"}}>
						<CardContent className="flex flex-col items-center justify-center p-32" style={{backgroundColor: "#333333"}}>
						<Canvas className="w-128 m-32">
								<ambientLight />
								<pointLight position={[10, 10, 10]} />
								<Box position={[0, 0, 0]} />
							</Canvas>

							<Typography variant="h6" className="mt-16 mb-32" style={{ textTransform: "none",color: "#A6E22E", letterSpacing: '-0.5px', fontSize: '25px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
								Recover your password
							</Typography>

							<form
								name="recoverForm"
								noValidate
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<TextField
									className="mb-16"
									label="Email"
									autoFocus
									color="secondary"
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<Button
									variant="contained"
									color="secondary"
									className="w-224 mx-auto mt-16"
									aria-label="Reset"
									disabled={!isFormValid()}
									type="submit"
									style={{ color: "#1e1f1c", letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}
								>
									Send reset link
								</Button>
							</form>

							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<Link className="font-medium" to="/login" style={{ color: "#F92672", letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Go back to login
								</Link>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default ForgotPasswordPage;
