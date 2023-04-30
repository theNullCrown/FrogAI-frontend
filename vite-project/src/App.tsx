import { useState } from 'react';
import frogaiLogo from './assets/frogai.jpg';
import './App.css';
import DeviceAndBudgetForm from './DeviceAndBudget';
import AdvancedForm from './Advanced';
import SpecialForm from './Special';
import OptionalFilterForm from './OptionalFilters';
import RecommendationForm from './Recommendations';
import UseCasesForm from './UseCases';

const App = () => {
    const [pcGpu, setPcGpu] = useState<string>('');
    const [mac, setMac] = useState<string>('no');
    const [console, setConsole] = useState<string>('');
    const [budget, setBudget] = useState<number>(0);
    const [motion, setMotion] = useState<string>('not');
    const [pq, setPq] = useState<string>('not');
    const [sharp, setSharp] = useState<string>('not');
    const [casual, setCasual] = useState<string>('not');
    const [comp, setComp] = useState<string>('not');
    const [text, setText] = useState<string>('not');
    const [media, setMedia] = useState<string>('not');
    const [print, setPrint] = useState<string>('no');
    const [edit, setEdit] = useState<string>('no');
    const [grade, setGrade] = useState<string>('no');
    const [aspect, setAspect] = useState<string>('nopref');
    const [curve, setCurve] = useState<string>('nopref');
    const [size, setSize] = useState<string>('nopref');
    const [res, setRes] = useState<string>('nopref');
    const [minRR, setMinRR] = useState<string>('nopref');
    const [panel, setPanel] = useState<string>('nopref');
    const [hdr, setHdr] = useState<string>('nopref');
    const [backlight, setBacklight] = useState<string>('nopref');
    const [mode, setMode] = useState<string>('basic');
    const [country, setCountry] = useState<string>('US');

    const handleInputChange = (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        switch (name) {
            case 'hdr':
                setHdr(value);
                break;
            case 'mode':
                setMode(value);
                break;
            case 'pc-gpu':
                setPcGpu(value);
                break;
            case 'mac':
                setMac(value);
                break;
            case 'console':
                setConsole(value);
                break;
            case 'budget':
                setBudget(parseInt(value));
                break;
            case 'casual':
                setCasual(value);
                if (value === 'only') {
                    setComp('not');
                    setText('not');
                    setMedia('not');
                }
                break;
            case 'comp':
                setComp(value);
                if (value === 'only') {
                    setCasual('not');
                    setText('not');
                    setMedia('not');
                }
                break;
            case 'text':
                setText(value);
                if (value === 'only') {
                    setComp('not');
                    setCasual('not');
                    setMedia('not');
                }
                break;
            case 'media':
                setMedia(value);
                if (value === 'only') {
                    setComp('not');
                    setText('not');
                    setCasual('not');
                }
                break;
            case 'motion':
                setMotion(value);
                if (value === 'only') {
                    setPq('not');
                    setSharp('not');
                }
                break;
            case 'pq':
                setPq(value);
                if (value === 'only') {
                    setMotion('not');
                    setSharp('not');
                }
                break;
            case 'sharp':
                setSharp(value);
                if (value === 'only') {
                    setPq('not');
                    setMotion('not');
                }
                break;
            case 'aspect':
                setAspect(value);
                break;
            case 'curve':
                setCurve(value);
                break;
            case 'size':
                setSize(value);
                break;
            case 'res':
                setRes(value);
                break;
            case 'minRR':
                setMinRR(value);
                break;
            case 'panel':
                setPanel(value);
                break;
            case 'backlight':
                setBacklight(value);
                break;
            case 'print':
                setPrint(value);
                break;
            case 'edit':
                setEdit(value);
                break;
            case 'grade':
                setGrade(value);
                break;
            case 'country':
                setCountry(value);
                break;
            default:
                break;
        }
    };

    const handleModeToggle = () => {
        setMode(mode === 'basic' ? 'advanced' : 'basic');
    };

    return (
        <div className="wrapper">
            <div className="header-container">
                <div className="color-bar"></div>
                <div className="brand">
                    <img
                        src={frogaiLogo}
                        alt="FrogAI Logo"
                        className="frogai-logo"
                    />
                    <h1 className="header">FrogAI</h1>
                </div>
            </div>

            <div className="forms-container">
                <div className="left-column">
                    {/* <h2>Form:</h2> */}
                    <DeviceAndBudgetForm
                        pcGpu={pcGpu}
                        mac={mac}
                        console={console}
                        budget={budget}
                        country={country}
                        handleInputChange={handleInputChange}
                    />
                    <div className="toggle-container">
                        <label>
                            <input
                                type="checkbox"
                                checked={mode === 'advanced'}
                                onChange={handleModeToggle}
                            />
                            <span className="toggle">Advanced Mode</span>
                        </label>
                    </div>
                    {mode === 'basic' ? (
                        <UseCasesForm
                            casual={casual}
                            comp={comp}
                            text={text}
                            media={media}
                            handleInputChange={handleInputChange}
                        />
                    ) : (
                        <AdvancedForm
                            motion={motion}
                            pq={pq}
                            sharp={sharp}
                            handleInputChange={handleInputChange}
                        />
                    )}
                    <SpecialForm
                        print={print}
                        edit={edit}
                        grade={grade}
                        console={console}
                        mac={mac}
                        pcGpu={pcGpu}
                        handleInputChange={handleInputChange}
                    />
                    <OptionalFilterForm
                        aspect={aspect}
                        curve={curve}
                        size={size}
                        res={res}
                        minRR={minRR}
                        panel={panel}
                        backlight={backlight}
                        hdr={hdr}
                        handleInputChange={handleInputChange}
                    />
                </div>
                <div className="right-column">
                    <RecommendationForm
                        pcGpu={pcGpu}
                        mac={mac}
                        consoles={console}
                        budget={budget}
                        motion={motion}
                        pq={pq}
                        sharp={sharp}
                        print={print}
                        edit={edit}
                        grade={grade}
                        aspect={aspect}
                        curve={curve}
                        size={size}
                        res={res}
                        minRR={minRR}
                        panel={panel}
                        backlight={backlight}
                        casual={casual}
                        comp={comp}
                        text={text}
                        media={media}
                        mode={mode}
                        hdr={hdr}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
