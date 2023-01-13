import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { CustomHeader } from "../../components/Header/CustomHeader";
import MainAdmin from "../../components/Layouts/MainAdmin";
import Table from "../../components/Table";
import { GetUsersQuery, ListUser } from "../../interfaces/user";
import { getAllUser } from "../../services/user";
import { useRouter } from "next/router";
import dateFormat from "dateformat";
import Role from "../../containers/Role";
import Card from "../../components/Card";
import ContentHeader from "./../../components/Header/ContentHeader";
import Pagination from "../../components/Pagination";

const DEFAULT_USERS_LIMIT = 5;

const ManageAccount = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [limitValue, setLimitValue] = useState(DEFAULT_USERS_LIMIT);

  const columnUser = ["Số thứ tự", "Tên", "Email", "Ngày tạo", "Admin"];
  const router = useRouter();

  let count = DEFAULT_USERS_LIMIT * (Number(router.query.page) - 1) + 1;

  const fetchUsers = async (query?: GetUsersQuery): Promise<void> => {
    try {
      const { data } = await getAllUser({
        ...query,
        limit: limitValue,
      });
      setUsers(data.users);
      setTotalUsers(data.total);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const onChangePage = (page: number) => {
    router.push({
      query: {
        page: page,
      },
    }, undefined,
    { shallow: true });
  };

  useEffect(() => {
    router.push(
      {
        query: {
          limit: limitValue,
        },
      },
      undefined,
      { shallow: true }
    );
  }, [limitValue]);

  useEffect(() => {
    const query = handleQueryParams(router.query);
    fetchUsers(query);
  }, [router.query]);

  const handleQueryParams = (query: any) => {
    const newQuery = query;

    if (!newQuery.page) {
      query.page = "1";
      router.push(
        {
          query: {
            ...newQuery,
          },
        },
        undefined,
        { shallow: true }
      );
    }
    return newQuery;
  };

  const dataSource = useMemo(() => {
    return users.map((item: ListUser, index: number) => {
      return [
        <> {count === 0 ? index + 1 : count++}</>,
        item.firstName + " " + item.lastName,
        item.email,
        <>{dateFormat(item.createdAt, "HH:MM dd/mm/yyyy")}</>,
        <>
          <Role role={item.admin} id={item.id} />
        </>,
      ];
    });
  }, [users]);
  return (
    <div>
      <ContentHeader
        title="Quản lý tài khoản"
        name="Danh sách người dùng"
      />
      <Card>
        <Card.Content>
          <Table columns={columnUser} dataSource={dataSource} />
        </Card.Content>
        <Pagination
          current={Number(router.query.page || 1)}
          pageSize={limitValue}
          total={totalUsers}
          onChange={onChangePage}
          setLimitValue={setLimitValue}
        />
      </Card>
    </div>
  );
};

ManageAccount.getLayout = function getLayout(page: ReactElement) {
  return <MainAdmin>{page}</MainAdmin>;
};

export default ManageAccount;
