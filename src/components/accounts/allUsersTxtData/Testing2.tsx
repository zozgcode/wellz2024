"use client";

import React from "react";
import { TbArrowBackUpDouble, TbArrowForwardUpDouble } from "react-icons/tb";
import { CgOrganisation } from "react-icons/cg";
import { TestingTwoTxData } from "../transactionData/TrxData";
import Link from "next/link";

export default function TestingTwo() {
  const top7TxData = TestingTwoTxData.slice(0, 7); // Fetching only the first five transactions
  const moreThanSeven = TestingTwoTxData.length > 7;

  return (
    <>
      {top7TxData.length === 0 && <div className="text-center">No transaction yet.</div>}
      {top7TxData.map((txt, i) => (
        <div key={i} className="border justify-between flex bg-white p-4 max-[470px]:px-2 w-full rounded-lg">
          <div className="flex gap-1">
            <div className="border w-7 sm:w-8 h-7 sm:h-8 flex items-center text-lg sm:text-xl justify-center text-[#d71e28] rounded-full bg-[#d71e28]/10">
              {txt.whatUsed === "Credit" && <TbArrowBackUpDouble />}
              {txt.whatUsed === "Debit" && <TbArrowForwardUpDouble />}
            </div>
            <div>
              <p className="trxName text-[15px] sm:text-base">{txt.txName}</p>
              <p className="text-[13px] mt-1 text-gray-400">{txt.date}</p>
            </div>
          </div>
          <div
            className={`text-right ${
              txt.whatUsed === "Credit" ? "text-green-500" : "text-red-500"
            }`}
          >
            <p className="font-semibold text-[15px] sm:text-base">
              {txt.amount}
            </p>
            <p className="text-sm md:text-base">{txt.whatUsed}</p>
          </div>
        </div>
      ))}
      {moreThanSeven && (
        <div className="text-center mt-8">
          <Link href="/accounts/transactions" className="bg-[#d71e28] text-white font-semibold border border-[#d71e28] rounded p-3 text-lg">Show All</Link>
        </div>
      )}
    </>
  );
}
