// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyLbFastTcpApplicationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * how long a closing TCP connection (both FINs received or a RST is received) should be kept for this application before cleaning up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#close_timeout PolicyLbFastTcpApplicationProfile#close_timeout}
  */
  readonly closeTimeout?: number;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#description PolicyLbFastTcpApplicationProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#display_name PolicyLbFastTcpApplicationProfile#display_name}
  */
  readonly displayName: string;
  /**
  * If enabled, all the flows to the bounded virtual server are mirrored to the standby node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#ha_flow_mirroring_enabled PolicyLbFastTcpApplicationProfile#ha_flow_mirroring_enabled}
  */
  readonly haFlowMirroringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#id PolicyLbFastTcpApplicationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * how long an idle TCP connection in ESTABLISHED state should be kept for this application before cleaning up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#idle_timeout PolicyLbFastTcpApplicationProfile#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#nsx_id PolicyLbFastTcpApplicationProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#tag PolicyLbFastTcpApplicationProfile#tag}
  */
  readonly tag?: PolicyLbFastTcpApplicationProfileTag[] | cdktf.IResolvable;
}
export interface PolicyLbFastTcpApplicationProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#scope PolicyLbFastTcpApplicationProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#tag PolicyLbFastTcpApplicationProfile#tag}
  */
  readonly tag?: string;
}

export function policyLbFastTcpApplicationProfileTagToTerraform(struct?: PolicyLbFastTcpApplicationProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyLbFastTcpApplicationProfileTagToHclTerraform(struct?: PolicyLbFastTcpApplicationProfileTag | cdktf.IResolvable): any {
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

export class PolicyLbFastTcpApplicationProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbFastTcpApplicationProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyLbFastTcpApplicationProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyLbFastTcpApplicationProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyLbFastTcpApplicationProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbFastTcpApplicationProfileTagOutputReference {
    return new PolicyLbFastTcpApplicationProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile nsxt_policy_lb_fast_tcp_application_profile}
*/
export class PolicyLbFastTcpApplicationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_lb_fast_tcp_application_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyLbFastTcpApplicationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyLbFastTcpApplicationProfile to import
  * @param importFromId The id of the existing PolicyLbFastTcpApplicationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyLbFastTcpApplicationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_lb_fast_tcp_application_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_fast_tcp_application_profile nsxt_policy_lb_fast_tcp_application_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyLbFastTcpApplicationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyLbFastTcpApplicationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_lb_fast_tcp_application_profile',
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
    this._closeTimeout = config.closeTimeout;
    this._description = config.description;
    this._displayName = config.displayName;
    this._haFlowMirroringEnabled = config.haFlowMirroringEnabled;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._nsxId = config.nsxId;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // close_timeout - computed: false, optional: true, required: false
  private _closeTimeout?: number; 
  public get closeTimeout() {
    return this.getNumberAttribute('close_timeout');
  }
  public set closeTimeout(value: number) {
    this._closeTimeout = value;
  }
  public resetCloseTimeout() {
    this._closeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeTimeoutInput() {
    return this._closeTimeout;
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

  // ha_flow_mirroring_enabled - computed: false, optional: true, required: false
  private _haFlowMirroringEnabled?: boolean | cdktf.IResolvable; 
  public get haFlowMirroringEnabled() {
    return this.getBooleanAttribute('ha_flow_mirroring_enabled');
  }
  public set haFlowMirroringEnabled(value: boolean | cdktf.IResolvable) {
    this._haFlowMirroringEnabled = value;
  }
  public resetHaFlowMirroringEnabled() {
    this._haFlowMirroringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haFlowMirroringEnabledInput() {
    return this._haFlowMirroringEnabled;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
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

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyLbFastTcpApplicationProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyLbFastTcpApplicationProfileTag[] | cdktf.IResolvable) {
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
      close_timeout: cdktf.numberToTerraform(this._closeTimeout),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      ha_flow_mirroring_enabled: cdktf.booleanToTerraform(this._haFlowMirroringEnabled),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      tag: cdktf.listMapper(policyLbFastTcpApplicationProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      close_timeout: {
        value: cdktf.numberToHclTerraform(this._closeTimeout),
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
      ha_flow_mirroring_enabled: {
        value: cdktf.booleanToHclTerraform(this._haFlowMirroringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
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
      tag: {
        value: cdktf.listMapperHcl(policyLbFastTcpApplicationProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbFastTcpApplicationProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
