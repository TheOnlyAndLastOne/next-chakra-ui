import {
  Box,
  Button,
  Code,
  Flex,
  Input,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function table() {
  const data = {
    headers: ["first name", "last name", "position"],
    // headers: ["To Convert", "into", "multiply by"],
    // columns: [
    //   {
    //     "to convert": "inches",
    //     into: "millimetres(mm)",
    //     "multiply by": "25.4",
    //   },
    //   {
    //     "to convert": "inches",
    //     into: "millimetres(mm)",
    //     "multiply by": "25.4",
    //   },
    //   {
    //     "to convert": "inches",
    //     into: "millimetres(mm)",
    //     "multiply by": "25.4",
    //   },
    // ],
  };

  const [tableData, setTableData] = useState({ data: [] });

  const [pageInfo, setPageInfo] = useState({ page: 1, pageSize: 10 });

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-nba.p.rapidapi.com/players",
      params: { page: pageInfo.page, per_page: pageInfo.pageSize },
      headers: {
        "X-RapidAPI-Key": "31f352c4b0mshb288821a8216d2fp1393ffjsnad960ce4a61e",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setTableData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pageInfo]);

  return (
    <Box height={"100vh"}>
      <Box height={"70vh"} overflow={"scroll"}>
        <TableContainer>
          <Table variant={"simple"}>
            <TableCaption>This is caption</TableCaption>
            <Thead>
              <Tr>
                {data.headers.map((head) => {
                  return <Th>{head}</Th>;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {tableData.data.map((column) => {
                return (
                  <>
                    <Tr>
                      <Td>{column["first_name"]}</Td>
                      <Td>{column["last_name"]}</Td>
                      <Td>{column["position"]}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To Convert Footer</Th>
                <Th>Into Footer</Th>
                <Th>Multiply Footer</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
      <Pagination pageInfo={pageInfo} setPageInfo={setPageInfo} />
    </Box>
  );
}

export default table;

function Pagination({ pageInfo, setPageInfo }) {
  const [inputPage, setInputPage] = useState(pageInfo.page);

  const prePage = () => {
    setPageInfo({ ...pageInfo, page: pageInfo.page - 1 });
  };

  const nextPage = () => {
    setPageInfo({ ...pageInfo, page: pageInfo.page + 1 });
  };

  const setPage = (givenPage) => {
    setPageInfo({ ...pageInfo, page: givenPage });
  };

  const setPageSize = (givenPageSize) => {
    setPageInfo({ ...pageInfo, pageSize: givenPageSize });
  };
  return (
    <>
      {/* {JSON.stringify(pageInfo)} */}
      <Flex height={"20vh"}>
        <Button disabled={pageInfo.page <= 0} onClick={() => prePage()}>
          prePage
        </Button>
        <Input value={pageInfo.page} readOnly width={"auto"} />
        <Button onClick={() => nextPage()}>nextPage</Button>
        <Input
          width={"auto"}
          defaultValue={inputPage}
          onChange={(e) => {
            setInputPage(e.target.value);
          }}
        />
        <Button onClick={() => setPage(inputPage)}>go to page</Button>
        <Select width={"auto"} onChange={(e) => setPageSize(e.target.value)}>
          <option value="10">10/页</option>
          <option value="20">20/页</option>
          <option value="30">30/页</option>
          <option value="50">50/页</option>
        </Select>
      </Flex>
    </>
  );
}
