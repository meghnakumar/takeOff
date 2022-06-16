import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";

const theme = createTheme({});
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function SignUp() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [error, setError] = useState({
		firstName: "",
		lastName: "",
		seat: "",
		number: "",
	});
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [seat, setSeat] = useState("");
	const [number, setNumber] = useState("");
	const handleSubmit = (event) => {
		const errors = {};
		if (!firstName) {
			errors.firstName = "First name is required!";
		} else if (!/^[A-Za-z]+$/.test(firstName)) {
			errors.firstName = "First name can only have characters!";
		}
		if (!lastName) {
			errors.lastName = "Last name is required!";
		} else if (!/^[A-Za-z]+$/.test(lastName)) {
			errors.lastName = "Last name can only have characters!";
		}
		if (!seat) {
			errors.seat = "Seats is required!";
		}
		if (!number) {
			errors.number = "Phone number is required!";
		}
		setError(errors);
		if (Object.keys(error).length === 0) {
			handleOpen();
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Card sx={{ maxWidth: 600, mt: 15, ml: 50, minHeight: 600 }}>
				<Container component="main" maxWidth="xs" sx={{ flex: "left" }}>
					<CssBaseline />
					<Box
						sx={{
							marginTop: 5,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography component="h1" variant="h5" sx={{ color: "#00838f" }}>
							Booking Information:
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 3 }}
						>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										autoComplete="given-name"
										name="firstName"
										required
										fullWidth
										id="firstName"
										label="First Name"
										autoFocus
										onChange={(e) => setFirstName(e.target.value)}
									/>
									<p>{error.firstName}</p>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="lastName"
										label="Last Name"
										name="lastName"
										autoComplete="family-name"
										onChange={(e) => setLastName(e.target.value)}
									/>
									<p>{error.lastName}</p>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="seat"
										label="Seat"
										name="seat"
										type="number"
										onChange={(e) => setSeat(e.target.value)}
									/>
									<p>{error.seat}</p>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										name="contact"
										label="Contact Number"
										type="number"
										id="number"
										onChange={(e) => setNumber(e.target.value)}
									/>
									<p>{error.number}</p>
								</Grid>
								<Grid item xs={12}>
									<FormControlLabel
										control={
											<Checkbox value="allowExtraEmails" color="primary" />
										}
										sx={{ color: "#00838f" }}
										label="Accept terms and conditions"
									/>
								</Grid>

								<Button
									variant="text"
									size="large"
									sx={{
										color: "#00838f",
										width: 200,
										top: 40,
										height: 60,
										left: 100,
									}}
									onClick={handleSubmit}
								>
									Add to Cart
								</Button>
								<Modal
									open={open}
									onClose={handleClose}
									aria-labelledby="modal-modal-title"
									aria-describedby="modal-modal-description"
								>
									<Box sx={style}>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											Added to cart
										</Typography>
									</Box>
								</Modal>
							</Grid>
						</Box>
					</Box>
				</Container>
			</Card>
		</ThemeProvider>
	);
}
