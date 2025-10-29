// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtEventActionL1AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto calculate pkt len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#auto SysUtEventActionL1A#auto}
  */
  readonly auto?: number;
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#direction SysUtEventActionL1A#direction}
  */
  readonly direction: string;
  /**
  * EventNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#event_number SysUtEventActionL1A#event_number}
  */
  readonly eventNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#id SysUtEventActionL1A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#length SysUtEventActionL1A#length}
  */
  readonly length?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#uuid SysUtEventActionL1A#uuid}
  */
  readonly uuid?: string;
  /**
  * Total packet length starting at L2 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#value SysUtEventActionL1A#value}
  */
  readonly value?: number;
  /**
  * eth_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#eth_list SysUtEventActionL1A#eth_list}
  */
  readonly ethList?: SysUtEventActionL1EthListStructA[] | cdktf.IResolvable;
  /**
  * trunk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#trunk_list SysUtEventActionL1A#trunk_list}
  */
  readonly trunkList?: SysUtEventActionL1TrunkListStructA[] | cdktf.IResolvable;
}
export interface SysUtEventActionL1EthListStructA {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#ethernet_end SysUtEventActionL1A#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#ethernet_start SysUtEventActionL1A#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function sysUtEventActionL1EthListStructAToTerraform(struct?: SysUtEventActionL1EthListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function sysUtEventActionL1EthListStructAToHclTerraform(struct?: SysUtEventActionL1EthListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.ethernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.ethernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL1EthListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SysUtEventActionL1EthListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetEnd = this._ethernetEnd;
    }
    if (this._ethernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStart = this._ethernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL1EthListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetEnd = undefined;
      this._ethernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetEnd = value.ethernetEnd;
      this._ethernetStart = value.ethernetStart;
    }
  }

  // ethernet_end - computed: false, optional: true, required: false
  private _ethernetEnd?: number; 
  public get ethernetEnd() {
    return this.getNumberAttribute('ethernet_end');
  }
  public set ethernetEnd(value: number) {
    this._ethernetEnd = value;
  }
  public resetEthernetEnd() {
    this._ethernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEndInput() {
    return this._ethernetEnd;
  }

  // ethernet_start - computed: false, optional: true, required: false
  private _ethernetStart?: number; 
  public get ethernetStart() {
    return this.getNumberAttribute('ethernet_start');
  }
  public set ethernetStart(value: number) {
    this._ethernetStart = value;
  }
  public resetEthernetStart() {
    this._ethernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartInput() {
    return this._ethernetStart;
  }
}

export class SysUtEventActionL1EthListStructAList extends cdktf.ComplexList {
  public internalValue? : SysUtEventActionL1EthListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SysUtEventActionL1EthListStructAOutputReference {
    return new SysUtEventActionL1EthListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysUtEventActionL1TrunkListStructA {
  /**
  * Trunk Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#trunk_end SysUtEventActionL1A#trunk_end}
  */
  readonly trunkEnd?: number;
  /**
  * Trunk groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#trunk_start SysUtEventActionL1A#trunk_start}
  */
  readonly trunkStart?: number;
}

export function sysUtEventActionL1TrunkListStructAToTerraform(struct?: SysUtEventActionL1TrunkListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk_end: cdktf.numberToTerraform(struct!.trunkEnd),
    trunk_start: cdktf.numberToTerraform(struct!.trunkStart),
  }
}


export function sysUtEventActionL1TrunkListStructAToHclTerraform(struct?: SysUtEventActionL1TrunkListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk_end: {
      value: cdktf.numberToHclTerraform(struct!.trunkEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_start: {
      value: cdktf.numberToHclTerraform(struct!.trunkStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL1TrunkListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SysUtEventActionL1TrunkListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunkEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkEnd = this._trunkEnd;
    }
    if (this._trunkStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkStart = this._trunkStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL1TrunkListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunkEnd = undefined;
      this._trunkStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunkEnd = value.trunkEnd;
      this._trunkStart = value.trunkStart;
    }
  }

  // trunk_end - computed: false, optional: true, required: false
  private _trunkEnd?: number; 
  public get trunkEnd() {
    return this.getNumberAttribute('trunk_end');
  }
  public set trunkEnd(value: number) {
    this._trunkEnd = value;
  }
  public resetTrunkEnd() {
    this._trunkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkEndInput() {
    return this._trunkEnd;
  }

  // trunk_start - computed: false, optional: true, required: false
  private _trunkStart?: number; 
  public get trunkStart() {
    return this.getNumberAttribute('trunk_start');
  }
  public set trunkStart(value: number) {
    this._trunkStart = value;
  }
  public resetTrunkStart() {
    this._trunkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkStartInput() {
    return this._trunkStart;
  }
}

export class SysUtEventActionL1TrunkListStructAList extends cdktf.ComplexList {
  public internalValue? : SysUtEventActionL1TrunkListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SysUtEventActionL1TrunkListStructAOutputReference {
    return new SysUtEventActionL1TrunkListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1 thunder_sys_ut_event_action_l1}
*/
export class SysUtEventActionL1A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_event_action_l1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtEventActionL1A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtEventActionL1A to import
  * @param importFromId The id of the existing SysUtEventActionL1A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtEventActionL1A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_event_action_l1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l1 thunder_sys_ut_event_action_l1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtEventActionL1AConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtEventActionL1AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_event_action_l1',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auto = config.auto;
    this._direction = config.direction;
    this._eventNumber = config.eventNumber;
    this._id = config.id;
    this._length = config.length;
    this._uuid = config.uuid;
    this._value = config.value;
    this._ethList.internalValue = config.ethList;
    this._trunkList.internalValue = config.trunkList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto - computed: false, optional: true, required: false
  private _auto?: number; 
  public get auto() {
    return this.getNumberAttribute('auto');
  }
  public set auto(value: number) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // event_number - computed: false, optional: false, required: true
  private _eventNumber?: string; 
  public get eventNumber() {
    return this.getStringAttribute('event_number');
  }
  public set eventNumber(value: string) {
    this._eventNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNumberInput() {
    return this._eventNumber;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // eth_list - computed: false, optional: true, required: false
  private _ethList = new SysUtEventActionL1EthListStructAList(this, "eth_list", false);
  public get ethList() {
    return this._ethList;
  }
  public putEthList(value: SysUtEventActionL1EthListStructA[] | cdktf.IResolvable) {
    this._ethList.internalValue = value;
  }
  public resetEthList() {
    this._ethList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethListInput() {
    return this._ethList.internalValue;
  }

  // trunk_list - computed: false, optional: true, required: false
  private _trunkList = new SysUtEventActionL1TrunkListStructAList(this, "trunk_list", false);
  public get trunkList() {
    return this._trunkList;
  }
  public putTrunkList(value: SysUtEventActionL1TrunkListStructA[] | cdktf.IResolvable) {
    this._trunkList.internalValue = value;
  }
  public resetTrunkList() {
    this._trunkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkListInput() {
    return this._trunkList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto: cdktf.numberToTerraform(this._auto),
      direction: cdktf.stringToTerraform(this._direction),
      event_number: cdktf.stringToTerraform(this._eventNumber),
      id: cdktf.stringToTerraform(this._id),
      length: cdktf.numberToTerraform(this._length),
      uuid: cdktf.stringToTerraform(this._uuid),
      value: cdktf.numberToTerraform(this._value),
      eth_list: cdktf.listMapper(sysUtEventActionL1EthListStructAToTerraform, true)(this._ethList.internalValue),
      trunk_list: cdktf.listMapper(sysUtEventActionL1TrunkListStructAToTerraform, true)(this._trunkList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto: {
        value: cdktf.numberToHclTerraform(this._auto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_number: {
        value: cdktf.stringToHclTerraform(this._eventNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.numberToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth_list: {
        value: cdktf.listMapperHcl(sysUtEventActionL1EthListStructAToHclTerraform, true)(this._ethList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionL1EthListStructAList",
      },
      trunk_list: {
        value: cdktf.listMapperHcl(sysUtEventActionL1TrunkListStructAToHclTerraform, true)(this._trunkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionL1TrunkListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
