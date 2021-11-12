import React from 'react'
import { Item } from './item';
import springboot from "../res/assets/springboot.png";
import django from "../res/assets/django.png";

export const ItemList = () => {
    return (
        <>
        <div>
            <Item img={springboot} todo="Learn Java" desc="Learn Spring Boot"/>
            <Item img={django} todo="Learn Python" desc="Learn Django"/>
        </div>
        </>
    );
}
