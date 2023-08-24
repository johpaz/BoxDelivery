import React, { useState, useEffect } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from '@nextui-org/react';


const fetchMediosPago = async () => {
    try {
        const response = await fetch('http://localhost:3004/mediospago');
        const mediosPagoData = await response.json();
        return mediosPagoData;
    } catch (error) {
        console.error('Error fetching medios de pago:', error);
        return [];
    }
};


  
export default function MediosPago({ onChange }) {
    const handleMedioPagoChange = (selectedMediosPago) => {
        onChange(selectedMediosPago);
      };
    const [mediosPago, setMediosPago] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(new Set());
    const selectedValue = Array.from(selectedKeys).join(", ");
    

    useEffect(() => {
        async function fetchAndSetMediosPago() {
            const mediosPagoData = await fetchMediosPago();
            setMediosPago(mediosPagoData);
        }
        fetchAndSetMediosPago();
    }, []);


    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button 
                        variant="bordered" 
                        className="capitalize"
                    >
                       Medio de Pago: {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                    aria-label="Medios de Pago"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    {mediosPago.map((medioPago) => (
                        <DropdownItem 
                            key={medioPago.nombre} 
                            value={medioPago.nombre}
                        >
                            {medioPago.nombre}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
