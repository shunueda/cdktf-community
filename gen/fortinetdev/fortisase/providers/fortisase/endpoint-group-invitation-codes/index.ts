// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointGroupInvitationCodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes#expire_date EndpointGroupInvitationCodes#expire_date}
  */
  readonly expireDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes#group_assignment EndpointGroupInvitationCodes#group_assignment}
  */
  readonly groupAssignment?: EndpointGroupInvitationCodesGroupAssignment;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes#primary_key EndpointGroupInvitationCodes#primary_key}
  */
  readonly primaryKey: string;
}
export interface EndpointGroupInvitationCodesGroupAssignmentGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes#id EndpointGroupInvitationCodes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes#path EndpointGroupInvitationCodes#path}
  */
  readonly path?: string;
}

export function endpointGroupInvitationCodesGroupAssignmentGroupToTerraform(struct?: EndpointGroupInvitationCodesGroupAssignmentGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function endpointGroupInvitationCodesGroupAssignmentGroupToHclTerraform(struct?: EndpointGroupInvitationCodesGroupAssignmentGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointGroupInvitationCodesGroupAssignmentGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointGroupInvitationCodesGroupAssignmentGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointGroupInvitationCodesGroupAssignmentGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._path = value.path;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface EndpointGroupInvitationCodesGroupAssignment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes#enabled EndpointGroupInvitationCodes#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes#group EndpointGroupInvitationCodes#group}
  */
  readonly group?: EndpointGroupInvitationCodesGroupAssignmentGroup;
}

export function endpointGroupInvitationCodesGroupAssignmentToTerraform(struct?: EndpointGroupInvitationCodesGroupAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group: endpointGroupInvitationCodesGroupAssignmentGroupToTerraform(struct!.group),
  }
}


export function endpointGroupInvitationCodesGroupAssignmentToHclTerraform(struct?: EndpointGroupInvitationCodesGroupAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: endpointGroupInvitationCodesGroupAssignmentGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "EndpointGroupInvitationCodesGroupAssignmentGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointGroupInvitationCodesGroupAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointGroupInvitationCodesGroupAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointGroupInvitationCodesGroupAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._group.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._group.internalValue = value.group;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group - computed: true, optional: true, required: false
  private _group = new EndpointGroupInvitationCodesGroupAssignmentGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: EndpointGroupInvitationCodesGroupAssignmentGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes fortisase_endpoint_group_invitation_codes}
*/
export class EndpointGroupInvitationCodes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoint_group_invitation_codes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointGroupInvitationCodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointGroupInvitationCodes to import
  * @param importFromId The id of the existing EndpointGroupInvitationCodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointGroupInvitationCodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoint_group_invitation_codes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_group_invitation_codes fortisase_endpoint_group_invitation_codes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointGroupInvitationCodesConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointGroupInvitationCodesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoint_group_invitation_codes',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expireDate = config.expireDate;
    this._groupAssignment.internalValue = config.groupAssignment;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expire_date - computed: true, optional: true, required: false
  private _expireDate?: string; 
  public get expireDate() {
    return this.getStringAttribute('expire_date');
  }
  public set expireDate(value: string) {
    this._expireDate = value;
  }
  public resetExpireDate() {
    this._expireDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDateInput() {
    return this._expireDate;
  }

  // group_assignment - computed: true, optional: true, required: false
  private _groupAssignment = new EndpointGroupInvitationCodesGroupAssignmentOutputReference(this, "group_assignment");
  public get groupAssignment() {
    return this._groupAssignment;
  }
  public putGroupAssignment(value: EndpointGroupInvitationCodesGroupAssignment) {
    this._groupAssignment.internalValue = value;
  }
  public resetGroupAssignment() {
    this._groupAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAssignmentInput() {
    return this._groupAssignment.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expire_date: cdktf.stringToTerraform(this._expireDate),
      group_assignment: endpointGroupInvitationCodesGroupAssignmentToTerraform(this._groupAssignment.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expire_date: {
        value: cdktf.stringToHclTerraform(this._expireDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_assignment: {
        value: endpointGroupInvitationCodesGroupAssignmentToHclTerraform(this._groupAssignment.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EndpointGroupInvitationCodesGroupAssignment",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
