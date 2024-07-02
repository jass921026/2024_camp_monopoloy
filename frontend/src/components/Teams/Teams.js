import React, { useEffect, useContext } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import RoleContext from "../useRole";
import Loading from "../Loading";
import axios from "../axios";
//import User from "../../../../backend/models/user";

const Teams = () => {
  const { teams, setTeams } = useContext(RoleContext);

  const columns = [
    { id: "teamname", label: "Team", minWidth: "10vw", align: "center" },
    // { id: "dice", label: "Dice", minWidth: "5vw", align: "center" },
    { id: "money", label: "Money", minWidth: "17vw", align: "center" },
    { id: "resources", label: "Resources", minWidth: "17vw", align: "center" },
  ];

  const getTeams = async () => {
    axios
      .get("/team")
      .then((res) => {
        setTeams(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // console.log("getTeams");
    // console.log(teams[5]);
  };

  useEffect(() => {
    getTeams();
    const id = setInterval(() => {
      getTeams();
    }, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (teams.length === 0) {
    return <Loading />;
  } else {
    return (
      <Paper
        elevation={0}
        sx={{
          overflow: "hidden",
          paddingTop: "60px",
          paddingBottom: "60px",
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >
        <TableContainer
          sx={{
            maxHeight: 900,
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((item) => (
                  <TableCell
                    key={item.id}
                    align={item.align}
                    style={{
                      minWidth: item.minWidth,
                      fontWeight: "800",
                      userSelect: "none",
                    }}
                  >
                    {item.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {teams.map((team) => {
                return (
                  <TableRow key={team.teamname}>
                    {columns.map((column) => {
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ userSelect: "none" }}
                        >
                          {column.id === "money"
                            ? Math.round(team[column.id]) > 0
                              ? Math.round(team[column.id])
                              : "破產"
                            : column.id === "resources"
                              ? `總召的愛: ${team[column.id].love}, EE幣: ${team[column.id].eecoin}`
                              : team[column.id]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
};
export default Teams;
