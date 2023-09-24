import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LandscapeIcon from '@mui/icons-material/Landscape';
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["Mint"];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  

    return (
        <AppBar
            position="static"
            className="bg-secondary text-primary font-heading shadow-none border-none w-full"
            style={{ background: '#D0E7D2' }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters className="bg-quaternary">
                    <LandscapeIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            flexGrow: 1,
                            fontFamily: "Open Sans",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "#618264",
                            textDecoration: "none",
                        }}
                    >
                        CANOE CREEK
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            color: "inherit",
                        }}
                    >
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        ></Menu>
                    </Box>
                    <LandscapeIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "Open Sans",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "#618264",
                            textDecoration: "none",
                        }}
                    ></Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                href={`/${page}`}
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#618264', display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
