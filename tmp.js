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
                  {resourceQuan.map((resource, index) => (
                    <TableRow key={index}>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ userSelect: "none" }}
                        >
                          {column.id === "name"
                            ? resourceName[index]  // Assuming resourceName is aligned with resourcesQuan by index
                            : column.id === "price"
                            ? resourcePrice[index]  // Assuming resourcePrice is aligned with resourcesQuan by index
                            : column.id === "quantity"
                            ? resource  // Use the value from resourceQuan directly
                            : null}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

            {/* <Table stickyHeader aria-label="sticky table">
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
                {resourceQuan.map((resource) => {
                  return (
                    <TableRow key={resource.teamname}>
                      {columns.map((column) => {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ userSelect: "none" }}
                          >
                            {column.id === "name"
                            ? resourceName
                            : column.id === "price"
                            ? resourcePrice
                            : resourceQuan}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table> */}
          </TableContainer>
        </Paper>