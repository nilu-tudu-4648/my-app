import axios from 'axios'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import CircularProgress from '@mui/material/CircularProgress';


import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DataTable from './DataTable';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
function Appcopy() {

  const [loading, setloading] = useState(false)
  const [slug, setslug] = useState([])
  const [b_name, setb_name] = useState([])
  const [vb_name, setvb_name] = useState([])
  const [wholedata, setwholedata] = useState([])
  const [wholedatafilterd, setwholedatafilterd] = useState([])

  const getData = async () => {
    setloading(true)
    try {
      const { data } = await axios.get("https://us-central1-arboreal-vision-339901.cloudfunctions.net/get_filter_values")
      setb_name(_.uniq(data.data.map(ite => ite.b_name)).sort((a, b) => b.localeCompare(a)))
      setvb_name(_.uniq(data.data.map(ite => ite.vb_name)).sort((a, b) => b.localeCompare(a)))
      setslug(_.uniq(data.data.map(ite => ite.slug)).sort((a, b) => b.localeCompare(a)))
      setwholedata(data.data)
      setwholedatafilterd(data.data)
      setloading(false)
    } catch (error) {
      setloading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(wholedatafilterd.map((ite, i) => (
      { ...ite, id: i + 1 }
    )))
    // setslug(wholedata.filter(ite => ite.slug.includes(newValue[0].toLowerCase()).map(ite=>ite.slug)))
  }, [slug, vb_name])

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      height: "100vh",
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {
        loading ? <CircularProgress style={{ alignSelf: 'center' }} />
          :
          <div style={{
            display: 'flex', boxShadow: '1px 2px 7px gray', justifyContent: 'center',
            height: '80vh', width: '70%', padding: 14, flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              width: '100%', alignItems: 'center'
            }}>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={slug}
                disableCloseOnSelect
                getOptionLabel={(option) => option}
                onChange={(event, newValue) => {
                  if (newValue.length) {
                    setwholedatafilterd(wholedata.filter(ite => ite.slug === newValue[0]).map((ite, i) => (
                      { ...ite, id: i + 1 }
                    )))
                    setb_name(_.uniq(wholedata.filter(ite => ite.slug === newValue[0]).map(ite => ite.b_name)))
                    setvb_name(_.uniq(wholedata.filter(ite => ite.slug === newValue[0]).map(ite => ite.vb_name)))
                  } else {
                    setwholedatafilterd(wholedata)
                    setslug(_.uniq(wholedata.map(ite => ite.slug)))
                    setvb_name(_.uniq(wholedata.map(ite => ite.vb_name)))
                  }
                }}
                renderOption={(props, option, { selected }) =>
                (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option}
                  </li>
                )
                }
                style={{ width: '32%' }}
                renderInput={(params) => (
                  <TextField {...params} label={"slug"} placeholder="Favorites" />
                )}
              />
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={vb_name}
                disableCloseOnSelect
                onChange={(event, newValue) => {
                  if (newValue.length) {
                    setwholedatafilterd(wholedata.filter(ite => ite.vb_name === newValue[0]).map((ite, i) => (
                      { ...ite, id: i + 1 }
                    )))
                    setslug(_.uniq(wholedata.filter(ite => ite.vb_name === newValue[0]).map(ite => ite.slug)))
                    setb_name(_.uniq(wholedata.filter(ite => ite.vb_name === newValue[0]).map(ite => ite.b_name)))
                  } else {
                    setslug(_.uniq(wholedata.map(ite => ite.slug)))
                    setb_name(_.uniq(wholedata.map(ite => ite.b_name)))
                  }
                }}
                getOptionLabel={(option) => option}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option}
                  </li>
                )}
                style={{ width: '32%' }}
                renderInput={(params) => (
                  <TextField {...params} label={"vb_name"} placeholder="Favorites" />
                )}
              />
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={b_name}
                disableCloseOnSelect
                getOptionLabel={(option) => option}
                onChange={(event, newValue) => {
                  if (newValue.length) {
                    setslug(_.uniq(wholedata.filter(ite => ite.b_name === newValue[0]).map(ite => ite.slug)))
                    setvb_name(_.uniq(wholedata.filter(ite => ite.b_name === newValue[0])).map(ite => ite.vb_name))
                  } else {
                    setslug(_.uniq(wholedata.map(ite => ite.slug)))
                    setvb_name(_.uniq(wholedata.map(ite => ite.vb_name)))
                  }
                }}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option}
                  </li>
                )}
                style={{ width: '32%' }}
                renderInput={(params) => (
                  <TextField {...params} label={"b_name"} placeholder="Favorites" />
                )}
              />
            </div>
            <DataTable data={wholedatafilterd} />
          </div>
      }
    </div>
  )
}

export default Appcopy