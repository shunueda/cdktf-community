// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalRouterLinkPortOnTier0Config extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0#description LogicalRouterLinkPortOnTier0#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0#display_name LogicalRouterLinkPortOnTier0#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0#id LogicalRouterLinkPortOnTier0#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for logical router on which this port is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0#logical_router_id LogicalRouterLinkPortOnTier0#logical_router_id}
  */
  readonly logicalRouterId: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0#tag LogicalRouterLinkPortOnTier0#tag}
  */
  readonly tag?: LogicalRouterLinkPortOnTier0Tag[] | cdktf.IResolvable;
}
export interface LogicalRouterLinkPortOnTier0Tag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0#scope LogicalRouterLinkPortOnTier0#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0#tag LogicalRouterLinkPortOnTier0#tag}
  */
  readonly tag?: string;
}

export function logicalRouterLinkPortOnTier0TagToTerraform(struct?: LogicalRouterLinkPortOnTier0Tag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function logicalRouterLinkPortOnTier0TagToHclTerraform(struct?: LogicalRouterLinkPortOnTier0Tag | cdktf.IResolvable): any {
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

export class LogicalRouterLinkPortOnTier0TagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterLinkPortOnTier0Tag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterLinkPortOnTier0Tag | cdktf.IResolvable | undefined) {
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

export class LogicalRouterLinkPortOnTier0TagList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterLinkPortOnTier0Tag[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterLinkPortOnTier0TagOutputReference {
    return new LogicalRouterLinkPortOnTier0TagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0 nsxt_logical_router_link_port_on_tier0}
*/
export class LogicalRouterLinkPortOnTier0 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_logical_router_link_port_on_tier0";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalRouterLinkPortOnTier0 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalRouterLinkPortOnTier0 to import
  * @param importFromId The id of the existing LogicalRouterLinkPortOnTier0 that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalRouterLinkPortOnTier0 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_logical_router_link_port_on_tier0", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_router_link_port_on_tier0 nsxt_logical_router_link_port_on_tier0} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalRouterLinkPortOnTier0Config
  */
  public constructor(scope: Construct, id: string, config: LogicalRouterLinkPortOnTier0Config) {
    super(scope, id, {
      terraformResourceType: 'nsxt_logical_router_link_port_on_tier0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._logicalRouterId = config.logicalRouterId;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // linked_logical_router_port_id - computed: true, optional: false, required: false
  public get linkedLogicalRouterPortId() {
    return this.getStringAttribute('linked_logical_router_port_id');
  }

  // logical_router_id - computed: false, optional: false, required: true
  private _logicalRouterId?: string; 
  public get logicalRouterId() {
    return this.getStringAttribute('logical_router_id');
  }
  public set logicalRouterId(value: string) {
    this._logicalRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRouterIdInput() {
    return this._logicalRouterId;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LogicalRouterLinkPortOnTier0TagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LogicalRouterLinkPortOnTier0Tag[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      logical_router_id: cdktf.stringToTerraform(this._logicalRouterId),
      tag: cdktf.listMapper(logicalRouterLinkPortOnTier0TagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_router_id: {
        value: cdktf.stringToHclTerraform(this._logicalRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(logicalRouterLinkPortOnTier0TagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogicalRouterLinkPortOnTier0TagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
