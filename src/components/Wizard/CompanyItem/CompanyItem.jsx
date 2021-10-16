// company item for step two in wizard

export const CompanyItem = ({selected, selectCompany,company}) => {

    return (
        <li className={"list-group-item company-item " + (selected ? 'active' : '')} onClick={() => selectCompany(company)}>
            {company.name}
        </li>
    )
}