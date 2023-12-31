import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const CoinCard = ({name,img,symbol,price,id,currencySymbol='₹'}) => {
  return (
   
          <Link to={`/coin/${id}`}>
            <VStack
              w={"52"}
              shadow={"lg"}
              p={"8"}
              borderRadius={"lg"}
              transition={"all 0.3s "}
              margin={"4"}
              cursor={'pointer'}
              css={{
                "&:hover": {
            
                  transform: "scale(1.1)",
                },
              }}
            >
              <Image
                src={img}
                w={"10"}
                h={"10"}
                objectFit={"contain"}
                alt="Exchanges"
              />
              <Heading size={"md"} noOfLines={1}>
                {symbol}
              </Heading>
              <Text>{name}</Text>
              <Text>{price?`${currencySymbol}${price}`:"NA"}</Text>
            </VStack>
          </Link>
        );
      };
      


export default CoinCard
