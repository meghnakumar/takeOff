import React, { useState, useEffect } from "react";
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
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createtourBooking } from "../../services/tourBookingServices";
import { addCartItem } from "../../services/cartServices";
import { useNavigate } from "react-router-dom";
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

export default function BookTours() {
	const location = useLocation();
	const navigate = useNavigate();
	let userId = JSON.parse(localStorage.getItem("userDetails"))._id;
	const tourId = location.state.tourId;
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
	const [date, setDate] = useState("");
	const [bookingSummary, setBookingSummary] = useState({
		firstName: "",
		lastName: "",
		seat: "",
		contact: "",
		eventId: "",
		userId: "",
		date: "",
	});

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
		const price = location.state.price * seat;

		if (Object.keys(error).length === 0) {
			setBookingSummary({
				firstName: firstName,
				lastName: lastName,
				seat: seat,
				contact: number,
				tourId: tourId,
				userId: userId,
				date: date,
				days: location.state.days,
				destination: location.state.destination,
				price: price,
			});
			handleOpen();
		}
	};

	const handleCreateTourBooking = (bookingInfo) => {
		try {
			createtourBooking(bookingInfo)
				.then((result) => {
					const addToCart = {
						type: result.data.type,
						userId: bookingSummary.userId,
						itemId: result.data._id,
						price: bookingSummary.price,
					};
					handleAddToCart(addToCart);
					navigate("/tour-packages");
				})
				.catch((err) => {
					console.error(err);
				});
		} catch (ex) {
			if (
				ex.response &&
				ex.response.status >= 400 &&
				ex.response.status < 500
			) {
				console.log(ex.response.data);
			}
		}
	};
	const handleAddToCart = (addToCart) => {
		try {
			addCartItem(addToCart)
				.then((res) => {
				})
				.catch((err) => {
					console.error(err);
				});
		} catch (ex) {
			if (
				ex.response &&
				ex.response.status >= 400 &&
				ex.response.status < 500
			) {
				console.log(ex.response.data);
			}
		}
	};
	const onConfirmation = () => {
		handleCreateTourBooking(bookingSummary);
	};
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ minHeight: "100vh" }}
			>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 600, mt: 15, minHeight: 600 }}>
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
								<Typography
									component="h1"
									variant="h5"
									sx={{ color: "#00838f" }}
								>
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
											<p style={{ color: "red" }}>{error.firstName}</p>
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
											<p style={{ color: "red" }}>{error.lastName}</p>
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
											<p style={{ color: "red" }}> {error.seat}</p>
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
											<p style={{ color: "red" }}>{error.number}</p>
										</Grid>
										<Grid item xs={12}>
											<TextField
												required
												fullWidth
												name="date"
												label="Date"
												type="date"
												id="date"
												onChange={(e) => setDate(e.target.value)}
											/>
											<p style={{ color: "red" }}>{error.number}</p>
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
											Confirm
										</Button>
										<Modal
											open={open}
											onClose={handleClose}
											aria-labelledby="modal-modal-title"
											aria-describedby="modal-modal-description"
										>
											<Box sx={style}>
												<Typography
													variant="h5"
													id="modal-modal-title"
													sx={{
														mt: 2,
														color: "#00838f",
														alignContent: "center",
													}}
												>
													Booking Summary
												</Typography>
												<Typography sx={{ mt: 2, alignContent: "center" }}>
													<TableContainer component={Paper}>
														<Table
															sx={{ maxWidth: 500 }}
															aria-label="simple table"
														>
															<TableRow>
																<TableCell align="right">FirstName</TableCell>

																<TableCell align="right">
																	{bookingSummary.firstName}
																</TableCell>
															</TableRow>
															<TableRow>
																<TableCell align="right">LastName</TableCell>

																<TableCell align="right">
																	{bookingSummary.lastName}
																</TableCell>
															</TableRow>
															<TableRow>
																<TableCell align="right">Tickets</TableCell>

																<TableCell align="right">
																	{bookingSummary.seat}
																</TableCell>
															</TableRow>
															<TableRow>
																<TableCell align="right">
																	Contact Number
																</TableCell>

																<TableCell align="right">
																	{bookingSummary.contact}
																</TableCell>
															</TableRow>
														</Table>
													</TableContainer>
												</Typography>
												<Button
													size="large"
													color="error"
													onClick={handleClose}
												>
													Cancel
												</Button>
												<Button
													size="large"
													sx={{
														color: "#00838f",
													}}
													onClick={(e) => {
														onConfirmation();
													}}
												>
													Add to Cart
												</Button>
											</Box>
										</Modal>
									</Grid>
								</Box>
							</Box>
						</Container>
					</Card>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
