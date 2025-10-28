// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyLbIcmpMonitorProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The data size (in byte) of the ICMP healthcheck packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#data_length PolicyLbIcmpMonitorProfile#data_length}
  */
  readonly dataLength?: number;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#description PolicyLbIcmpMonitorProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#display_name PolicyLbIcmpMonitorProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Number of consecutive checks that must fail before marking it down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#fall_count PolicyLbIcmpMonitorProfile#fall_count}
  */
  readonly fallCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#id PolicyLbIcmpMonitorProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The frequency at which the system issues the monitor check (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#interval PolicyLbIcmpMonitorProfile#interval}
  */
  readonly interval?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#nsx_id PolicyLbIcmpMonitorProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Number of consecutive checks that must pass before marking it up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#rise_count PolicyLbIcmpMonitorProfile#rise_count}
  */
  readonly riseCount?: number;
  /**
  * Number of seconds the target has to respond to the monitor request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#timeout PolicyLbIcmpMonitorProfile#timeout}
  */
  readonly timeout?: number;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#tag PolicyLbIcmpMonitorProfile#tag}
  */
  readonly tag?: PolicyLbIcmpMonitorProfileTag[] | cdktf.IResolvable;
}
export interface PolicyLbIcmpMonitorProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#scope PolicyLbIcmpMonitorProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#tag PolicyLbIcmpMonitorProfile#tag}
  */
  readonly tag?: string;
}

export function policyLbIcmpMonitorProfileTagToTerraform(struct?: PolicyLbIcmpMonitorProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyLbIcmpMonitorProfileTagToHclTerraform(struct?: PolicyLbIcmpMonitorProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbIcmpMonitorProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbIcmpMonitorProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbIcmpMonitorProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyLbIcmpMonitorProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyLbIcmpMonitorProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbIcmpMonitorProfileTagOutputReference {
    return new PolicyLbIcmpMonitorProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile nsxt_policy_lb_icmp_monitor_profile}
*/
export class PolicyLbIcmpMonitorProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_lb_icmp_monitor_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyLbIcmpMonitorProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyLbIcmpMonitorProfile to import
  * @param importFromId The id of the existing PolicyLbIcmpMonitorProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyLbIcmpMonitorProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_lb_icmp_monitor_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_icmp_monitor_profile nsxt_policy_lb_icmp_monitor_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyLbIcmpMonitorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyLbIcmpMonitorProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_lb_icmp_monitor_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataLength = config.dataLength;
    this._description = config.description;
    this._displayName = config.displayName;
    this._fallCount = config.fallCount;
    this._id = config.id;
    this._interval = config.interval;
    this._nsxId = config.nsxId;
    this._riseCount = config.riseCount;
    this._timeout = config.timeout;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_length - computed: false, optional: true, required: false
  private _dataLength?: number; 
  public get dataLength() {
    return this.getNumberAttribute('data_length');
  }
  public set dataLength(value: number) {
    this._dataLength = value;
  }
  public resetDataLength() {
    this._dataLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthInput() {
    return this._dataLength;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fall_count - computed: false, optional: true, required: false
  private _fallCount?: number; 
  public get fallCount() {
    return this.getNumberAttribute('fall_count');
  }
  public set fallCount(value: number) {
    this._fallCount = value;
  }
  public resetFallCount() {
    this._fallCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallCountInput() {
    return this._fallCount;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // rise_count - computed: false, optional: true, required: false
  private _riseCount?: number; 
  public get riseCount() {
    return this.getNumberAttribute('rise_count');
  }
  public set riseCount(value: number) {
    this._riseCount = value;
  }
  public resetRiseCount() {
    this._riseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riseCountInput() {
    return this._riseCount;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyLbIcmpMonitorProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyLbIcmpMonitorProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_length: cdktf.numberToTerraform(this._dataLength),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      fall_count: cdktf.numberToTerraform(this._fallCount),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      rise_count: cdktf.numberToTerraform(this._riseCount),
      timeout: cdktf.numberToTerraform(this._timeout),
      tag: cdktf.listMapper(policyLbIcmpMonitorProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_length: {
        value: cdktf.numberToHclTerraform(this._dataLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fall_count: {
        value: cdktf.numberToHclTerraform(this._fallCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rise_count: {
        value: cdktf.numberToHclTerraform(this._riseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag: {
        value: cdktf.listMapperHcl(policyLbIcmpMonitorProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbIcmpMonitorProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
