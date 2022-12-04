import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./Orders";
import { useEffect } from "preact/hooks";

interface AllOrdersProps {
  setTitle: (title: string) => void;
}

export default function AllOrders(props: AllOrdersProps) {
  useEffect(() => {
    props.setTitle("Orders");
  }, [props]);

  return (
    <React.Fragment>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
